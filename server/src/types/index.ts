import { z } from 'zod';

export const messageSchema = z.object({
  name: z
    .string()
    .min(2, 'Имя должно содержать минимум 2 символа')
    .max(50, 'Имя не должно превышать 50 символов')
    .regex(/^[а-яА-Яa-zA-Z\s]+$/, 'Имя может содержать только буквы и пробелы'),
  
  phone: z
    .string()
    .min(11, 'Введите корректный номер телефона')
    .max(13, 'Введите корректный номер телефона')
    .refine((val) => {
      if (val.startsWith('+375') && val.length === 13) {
        return /^\+375\d{9}$/.test(val);
      }
      if (val.startsWith('80') && val.length === 11) {
        return /^80\d{9}$/.test(val);
      }
      return false;
    }, 'Введите корректный белорусский номер телефона (+375XXXXXXXXX или 80XXXXXXXXX)'),
  
  message: z
    .string()
    .min(2, 'Сообщение должно содержать минимум 2 символа')
    .max(1000, 'Сообщение не должно превышать 1000 символов')
    .trim(),
});

export type MessageData = z.infer<typeof messageSchema>;

export interface Message {
  id: number;
  name: string;
  phone: string;
  message: string;
  created_at: Date;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  details?: Array<{
    field: string;
    message: string;
  }>;
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
  ssl?: boolean;
}

export interface ServerConfig {
  port: number;
  nodeEnv: string;
  clientUrl: string;
  dbHost: string;
  dbPort: number;
  dbName: string;
  dbUser: string;
  dbPassword: string;
  dbSsl: boolean;
}