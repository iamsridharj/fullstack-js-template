import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import validate from '@middlewares/joiValidation.middleware';

describe('Validation Middleware', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  const mockSchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
  });

  beforeEach(() => {
    req = {
      body: {},
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  it('should call next() if validation passes', () => {
    req.body = { name: 'John', age: 30 };

    validate(mockSchema)(req as Request, res as Response, next);

    expect(next).toHaveBeenCalled();
  });

  it('should return 400 if validation fails', () => {
    req.body = { name: 'John' }; // Missing age

    validate(mockSchema)(req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: 'error',
      message: ['age is required'],
    });
    expect(next).not.toHaveBeenCalled();
  });

  it('should format error messages correctly', () => {
    req.body = { name: 123, age: 'invalid' };

    validate(mockSchema)(req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: 'error',
      message: [
        'name must be a string',
        'age must be a number',
      ],
    });
    expect(next).not.toHaveBeenCalled();
  });
});
