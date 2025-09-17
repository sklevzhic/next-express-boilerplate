import swaggerJsdoc from 'swagger-jsdoc';
import { getServerConfig } from './app.js';

const config = getServerConfig();

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FERC Story API',
      version: '1.0.0',
      description: 'API для приложения FERC Story - система обработки сообщений',
      contact: {
        name: 'FERC Story Team',
        email: 'support@fercstory.com'
      },
      license: {
        name: 'ISC',
        url: 'https://opensource.org/licenses/ISC'
      }
    },
    servers: [
      {
        url: `http://localhost:${config.port}`,
        description: 'Development server'
      },
      {
        url: 'https://api.fercstory.com',
        description: 'Production server'
      }
    ],
    components: {
      schemas: {
        // Схемы будут генерироваться автоматически из JSDoc комментариев
        // или можно добавить только базовые схемы при необходимости
      }
    },
    tags: [
      {
        name: 'Messages',
        description: 'Операции с сообщениями'
      },
      {
        name: 'Health',
        description: 'Проверка состояния сервера'
      }
    ]
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts', './src/app.ts']
};

export const swaggerSpec = swaggerJsdoc(options);
