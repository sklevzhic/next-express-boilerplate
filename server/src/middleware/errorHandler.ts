import { Request, Response, NextFunction } from 'express';
import { ServerConfig } from '../config/app.js';

export function errorHandler(config: ServerConfig) {
  return (err: Error, req: Request, res: Response, next: NextFunction): void => {
    console.error('Error:', err);
    
    const response = {
      success: false,
      error: 'Internal server error',
      message: config.nodeEnv === 'development' ? err.message : 'Something went wrong'
    };
    
    res.status(500).json(response);
  };
}

export function notFoundHandler(req: Request, res: Response): void {
  res.status(404).json({
    success: false,
    error: 'Route not found',
    message: 'Маршрут не найден'
  });
}
