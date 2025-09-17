import express from 'express';
import { MessageController } from '../controllers/messageController.js';

const router = express.Router();

/**
 * @swagger
 * /api/messages:
 *   post:
 *     summary: Создать новое сообщение
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, phone, message]
 *             properties:
 *               name:
 *                 type: string
 *                 minLength: 2
 *                 maxLength: 50
 *                 pattern: '^[а-яА-Яa-zA-Z\\s]+$'
 *                 description: 'Имя отправителя сообщения'
 *                 example: 'Иван Иванов'
 *               phone:
 *                 type: string
 *                 minLength: 11
 *                 maxLength: 13
 *                 pattern: '^(\\+375\\d{9}|80\\d{9})$'
 *                 description: 'Номер телефона в белорусском формате'
 *                 example: '+375291234567'
 *               message:
 *                 type: string
 *                 minLength: 2
 *                 maxLength: 1000
 *                 description: 'Текст сообщения'
 *                 example: 'Здравствуйте! Хотел бы узнать больше о ваших услугах.'
 *     responses:
 *       201:
 *         description: Сообщение создано
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: 'Сообщение успешно создано'
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *       400:
 *         description: Ошибка валидации
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: 'Validation failed'
 *                 details:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       field:
 *                         type: string
 *                         example: 'phone'
 *                       message:
 *                         type: string
 *                         example: 'Введите корректный номер телефона'
 *       500:
 *         description: Ошибка сервера
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: 'Internal server error'
 */
router.post('/', MessageController.createMessage);

/**
 * @swagger
 * /api/messages:
 *   get:
 *     summary: Получить все сообщения
 *     tags: [Messages]
 *     responses:
 *       200:
 *         description: Список сообщений получен успешно
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: 'Сообщения успешно получены'
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: 'Уникальный идентификатор сообщения'
 *                         example: 1
 *                       name:
 *                         type: string
 *                         description: 'Имя отправителя'
 *                         example: 'Иван Иванов'
 *                       phone:
 *                         type: string
 *                         description: 'Номер телефона'
 *                         example: '+375291234567'
 *                       message:
 *                         type: string
 *                         description: 'Текст сообщения'
 *                         example: 'Здравствуйте! Хотел бы узнать больше о ваших услугах.'
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                         description: 'Дата и время создания сообщения'
 *                         example: '2024-01-15T10:30:00.000Z'
 *       500:
 *         description: Ошибка сервера
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: 'Internal server error'
 *                 message:
 *                   type: string
 *                   example: 'Внутренняя ошибка сервера'
 */
router.get('/', MessageController.getAllMessages);

// router.get('/count', MessageController.getMessageCount);

// router.get('/:id', MessageController.getMessageById);

// router.put('/:id', MessageController.updateMessage);

// router.delete('/:id', MessageController.deleteMessage);

export { router as messagesRouter };