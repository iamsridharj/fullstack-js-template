import { Request, Response, NextFunction } from 'express';
import errorMiddleware from '@middlewares/errorHandler.middleware';
import { AppError, ValidationError, DatabaseError } from '@utils/AppError.util';

describe('Error Middleware', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  it('should handle AppError correctly', () => {
    const error = new AppError('Test error', 400);

    errorMiddleware(error, req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: 'fail',
      message: 'Test error',
    });
  });

  it('should handle ValidationError correctly', () => {
    const error = new ValidationError('Validation failed');

    errorMiddleware(error, req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: 'fail',
      message: 'Validation failed',
    });
  });

  it('should handle DatabaseError correctly', () => {
    const error = new DatabaseError('Database error');

    errorMiddleware(error, req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      status: 'error',
      message: 'Database error',
    });
  });

  it('should handle unexpected errors correctly', () => {
    const error = new Error('Unexpected error');

    errorMiddleware(error as AppError, req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      status: 'error',
      message: 'An unexpected error occurred',
    });
  });
});
