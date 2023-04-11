import { Request, Response, NextFunction } from 'express';
import { AnyObjectSchema } from 'yup';

const validator =
  (schema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
      });
      return next();
    } catch (error) {
      return res.status(400).json({
        error: error?.errors ?? error?.message ?? error,
      });
    }
  };

export default validator;
