class AppError extends Error {
    public statusCode: number;
    public status: string;
    public isOperational: boolean;
  
    constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
      this.isOperational = true;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  class ValidationError extends AppError {
    constructor(message: string) {
      super(message, 400);
    }
  }
  
  class DatabaseError extends AppError {
    constructor(message: string) {
      super(message, 500);
    }
  }
  
  export { AppError, ValidationError, DatabaseError };
  