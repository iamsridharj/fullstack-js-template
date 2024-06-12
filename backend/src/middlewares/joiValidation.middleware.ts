import { Request, Response, NextFunction } from 'express';
import { Schema, ValidationResult } from 'joi';

const validate = (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
  const validationResult: ValidationResult = schema.validate(req.body, { abortEarly: false })

  const { error } = validationResult;

  if (error) {
    const errorMessages = error.details.map(detail => detail.message.replace(/\"/g, ''));
    return res.status(400).json({ status: 'error', message: errorMessages });
  }
  
  next();
};

export default validate;
