import { AppError, ValidationError, DatabaseError } from '@utils/AppError.util';

describe('AppError', () => {
  it('should create an AppError with the correct properties', () => {
    const error = new AppError('Test error', 500);

    expect(error).toBeInstanceOf(AppError);
    expect(error.message).toBe('Test error');
    expect(error.statusCode).toBe(500);
    expect(error.status).toBe('error');
    expect(error.isOperational).toBe(true);
  });

  it('should create a ValidationError with the correct properties', () => {
    const error = new ValidationError('Validation failed');

    expect(error).toBeInstanceOf(ValidationError);
    expect(error).toBeInstanceOf(AppError);
    expect(error.message).toBe('Validation failed');
    expect(error.statusCode).toBe(400);
    expect(error.status).toBe('fail');
    expect(error.isOperational).toBe(true);
  });

  it('should create a DatabaseError with the correct properties', () => {
    const error = new DatabaseError('Database connection failed');

    expect(error).toBeInstanceOf(DatabaseError);
    expect(error).toBeInstanceOf(AppError);
    expect(error.message).toBe('Database connection failed');
    expect(error.statusCode).toBe(500);
    expect(error.status).toBe('error');
    expect(error.isOperational).toBe(true);
  });
});
