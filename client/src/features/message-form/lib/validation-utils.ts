import { ZodError } from 'zod';

export interface ValidationError {
  field: string;
  message: string;
}

export function formatValidationErrors(error: ZodError): ValidationError[] {
  return error.issues.map((err) => ({
    field: err.path.join('.'),
    message: err.message,
  }));
}

export function getFieldError(errors: ValidationError[], field: string): string | undefined {
  return errors.find((err) => err.field === field)?.message;
}
