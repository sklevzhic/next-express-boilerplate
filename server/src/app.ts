import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { getServerConfig } from './config/app.js';
import { connectDatabase, disconnectDatabase } from './config/prisma.js';
import { swaggerSpec } from './config/swagger.js';
import { messagesRouter } from './routes/messages.js';
import { corsMiddleware, corsHeaders } from './middleware/cors.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import { Logger } from './utils/logger.js';

dotenv.config();

export async function createApp(): Promise<express.Application> {
  const app = express();
  const config = getServerConfig();

  await connectDatabase();

  app.use(corsMiddleware(config));
  app.use(corsHeaders);
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  app.use((req, res, next) => {
    Logger.info(`${req.method} ${req.path}`, {
      ip: req.ip,
      userAgent: req.get('User-Agent')
    });
    next();
  });

  /**
   * @swagger
   * /health:
   *   get:
   *     summary: Проверка состояния сервера
   *     description: Возвращает информацию о состоянии сервера и подключении к базе данных
   *     tags: [Health]
   *     responses:
   *       200:
   *         description: Сервер работает нормально
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: string
   *                   description: 'Статус сервера'
   *                   example: 'OK'
   *                 timestamp:
   *                   type: string
   *                   format: date-time
   *                   description: 'Время проверки'
   *                   example: '2024-01-15T10:30:00.000Z'
   *                 environment:
   *                   type: string
   *                   description: 'Окружение'
   *                   example: 'development'
   *                 database:
   *                   type: string
   *                   description: 'Статус базы данных'
   *                   example: 'connected'
   *             examples:
   *               healthy:
   *                 summary: Сервер работает
   *                 value:
   *                   status: "OK"
   *                   timestamp: "2024-01-15T10:30:00.000Z"
   *                   environment: "development"
   *                   database: "connected"
   */
  app.get('/health', (req, res) => {
    res.json({ 
      status: 'OK', 
      timestamp: new Date().toISOString(),
      environment: config.nodeEnv,
      database: 'connected'
    });
  });

  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'FERC Story API Documentation',
    customfavIcon: '/favicon.ico'
  }));

  app.use('/api/messages', messagesRouter);

  app.use(notFoundHandler);
  app.use(errorHandler(config));

  return app;
}

export async function startServer(): Promise<void> {
  try {
    const app = await createApp();
    const config = getServerConfig();
    
    const server = app.listen(config.port, () => {
      Logger.info(`Server is running on port ${config.port}`);
      Logger.info(`Environment: ${config.nodeEnv}`);
      Logger.info(`Health check: http://localhost:${config.port}/health`);
      Logger.info(`API Documentation: http://localhost:${config.port}/api-docs`);
      Logger.info(`OpenAPI JSON: http://localhost:${config.port}/api-docs.json`);
    });

    process.on('SIGTERM', async () => {
      Logger.info('SIGTERM received, shutting down gracefully');
      server.close(async () => {
        await disconnectDatabase();
        Logger.info('Server closed'); 
        process.exit(0);
      });
    });

    process.on('SIGINT', async () => {
      Logger.info('SIGINT received, shutting down gracefully');
      server.close(async () => {
        await disconnectDatabase();
        Logger.info('Server closed');
        process.exit(0);
      });
    });

  } catch (error) {
    Logger.error('Failed to start server:', error);
    process.exit(1);
  }
}
