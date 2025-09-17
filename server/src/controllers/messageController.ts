import { Request, Response } from 'express';
import { messageSchema, MessageData, ApiResponse } from '../types/index.js';
import { MessageService } from '../services/messageService.js';
import { validateRequest, isValidId } from '../utils/validation.js';
import { Logger } from '../utils/logger.js';

export class MessageController {
  static async createMessage(req: Request, res: Response): Promise<void> {
    try {
      const validation = validateRequest(messageSchema, req.body);
      
      if (!validation.success) {
        res.status(400).json(validation.response);
        return;
      }

      const messageData: MessageData = validation.data;
      const result = await MessageService.createMessage(messageData);
      
      if (result.success) {
        res.status(201).json(result);
      } else {
        res.status(500).json(result);
      }
    } catch (error) {
      Logger.error('Error in MessageController.createMessage:', error);
      const response: ApiResponse = {
        success: false,
        error: 'Internal server error',
        message: 'Внутренняя ошибка сервера'
      };
      res.status(500).json(response);
    }
  }

  static async getAllMessages(req: Request, res: Response): Promise<void> {
    try {
      const result = await MessageService.getAllMessages();
      
      if (result.success) {
        res.status(200).json(result);
      } else {
        res.status(500).json(result);
      }
    } catch (error) {
      Logger.error('Error in MessageController.getAllMessages:', error);
      const response: ApiResponse = {
        success: false,
        error: 'Internal server error',
        message: 'Внутренняя ошибка сервера'
      };
      res.status(500).json(response);
    }
  }
  // static async getMessageById(req: Request, res: Response): Promise<void>
  // static async updateMessage(req: Request, res: Response): Promise<void>
  // static async deleteMessage(req: Request, res: Response): Promise<void>
  // static async getMessageCount(req: Request, res: Response): Promise<void>
}
