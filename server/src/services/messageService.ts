import { MessageData, ApiResponse, Message } from '../types/index.js';
import { MessageModel } from '../models/Message.js';
import { Logger } from '../utils/logger.js';

export class MessageService {
  static async createMessage(messageData: MessageData): Promise<ApiResponse<{ id: number }>> {
    try {
      Logger.info('Creating new message', {
        name: messageData.name,
        phone: messageData.phone,
        messageLength: messageData.message.length
      });

      const result = await MessageModel.create(messageData);
      
      if (result.success) {
        Logger.info('Message created successfully', { id: result.data?.id });
      }
      
      return result;
    } catch (error) {
      Logger.error('Error in MessageService.createMessage:', error);
      return {
        success: false,
        error: 'Internal server error',
        message: 'Внутренняя ошибка сервера'
      };
    }
  }

  static async getAllMessages(): Promise<ApiResponse<Message[]>> {
    try {
      Logger.info('Fetching all messages');
      
      const result = await MessageModel.findAll();
      
      if (result.success) {
        Logger.info('Messages fetched successfully', { 
          count: result.data?.length || 0 
        });
      } else {
        Logger.error('Failed to fetch messages', { error: result.error });
      }
      
      return result;
    } catch (error) {
      Logger.error('Error in MessageService.getAllMessages:', error);
      return {
        success: false,
        error: 'Internal server error',
        message: 'Внутренняя ошибка сервера'
      };
    }
  }
  // static async getMessageById(id: number): Promise<ApiResponse<Message>>
  // static async updateMessage(id: number, messageData: Partial<MessageData>): Promise<ApiResponse<Message>>
  // static async deleteMessage(id: number): Promise<ApiResponse>
  // static async getMessageCount(): Promise<ApiResponse<{ count: number }>>
}
