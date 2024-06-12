import { Request, Response, NextFunction } from 'express';
import { AppError } from '@utils/AppError.util';

const errorMiddleware = (err: AppError, req: Request, res: Response, next: NextFunction): void => {
  if (!(err instanceof AppError)) {
    err = new AppError('An unexpected error occurred', 500);
  } else {
  }

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

export default errorMiddleware;
