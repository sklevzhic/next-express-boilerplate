import { prisma } from '../config/prisma.js';
import { Message, MessageData, ApiResponse } from '../types/index.js';

export class MessageModel {
  static async create(messageData: MessageData): Promise<ApiResponse<{ id: number }>> {
    try {
      const message = await prisma.message.create({
        data: {
          name: messageData.name,
          phone: messageData.phone,
          message: messageData.message,
        },
        select: {
          id: true,
        },
      });
      
      return {
        success: true,
        message: 'Сообщение успешно сохранено',
        data: { id: message.id }
      };

    } catch (error) {
      console.error('Database error in MessageModel.create:', error);
      return {
        success: false,
        error: 'Failed to save message',
        message: 'Произошла ошибка при сохранении сообщения'
      };
    }
  }

  static async findAll(): Promise<ApiResponse<Message[]>> {
    try {
      const messages = await prisma.message.findMany({
        orderBy: {
          created_at: 'desc'
        }
      });
      
      return {
        success: true,
        message: 'Сообщения успешно получены',
        data: messages
      };

    } catch (error) {
      console.error('Database error in MessageModel.findAll:', error);
      return {
        success: false,
        error: 'Failed to fetch messages',
        message: 'Произошла ошибка при получении сообщений'
      };
    }
  }
  // static async findById(id: number): Promise<ApiResponse<Message>>
  // static async deleteById(id: number): Promise<ApiResponse>
  // static async updateById(id: number, messageData: Partial<MessageData>): Promise<ApiResponse<Message>>
  // static async count(): Promise<ApiResponse<{ count: number }>>
}
