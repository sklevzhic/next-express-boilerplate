import { z } from 'zod';
import { ApiResponse } from '../types/index.js';

export function validateRequest<T>(schema: z.ZodSchema<T>, data: unknown): {
  success: true;
  data: T;
} | {
  success: false;
  response: ApiResponse;
} {
  const result = schema.safeParse(data);
  
  if (result.success) {
    return {
      success: true,
      data: result.data
    };
  }
  
  return {
    success: false,
    response: {
      success: false,
      error: 'Validation failed',
      details: result.error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }))
    }
  };
}

export function isValidId(id: string): boolean {
  const numId = parseInt(id, 10);
  return !isNaN(numId) && numId > 0;
}

export function sanitizeString(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}
