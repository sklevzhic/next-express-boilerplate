import { z } from 'zod';

export const phoneSchema = z
  .string()
  .min(1, 'Номер телефона обязателен')
  .regex(
    /^(\+375|80)(29|25|44|33|17)\d{7}$/,
    'Введите корректный белорусский номер телефона'
  );

export const nameSchema = z
  .string()
  .min(2, 'Имя должно содержать минимум 2 символа')
  .max(50, 'Имя не должно превышать 50 символов')
  .regex(/^[а-яА-ЯёЁa-zA-Z\s]+$/, 'Имя может содержать только буквы и пробелы');

export const messageSchema = z
  .string()
  .min(10, 'Сообщение должно содержать минимум 10 символов')
  .max(1000, 'Сообщение не должно превышать 1000 символов');

export const messageFormSchema = z.object({
  name: nameSchema,
  phone: phoneSchema,
  message: messageSchema,
});

export type MessageFormData = z.infer<typeof messageFormSchema>;
