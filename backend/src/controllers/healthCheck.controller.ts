import { normalizeResponse } from '@utils/responseNormalizer.util';
import { Request, Response, NextFunction } from 'express';

export const healthCheckController = (req:Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json(normalizeResponse({message: "Server is healthy!"}));
      } catch (err) {
        next(err);
      }
  };
  