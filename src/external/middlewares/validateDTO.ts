import { NextFunction, Request, Response } from 'express';
import { AnyObject, ObjectSchema, ValidationError } from 'yup';

// ---------------------------------------------------- //

type ValidationSource = 'body' | 'query' | 'params';

export const validateDTO = <T extends AnyObject>(schema: ObjectSchema<T>, source: ValidationSource) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req[source], { abortEarly: false, strict: true });
      next();
    } catch (err) {
      if (err instanceof ValidationError) {
        const errors = err.inner.map((error) => ({
          field: error.path,
          message: error.message,
        }));

        return res.status(400).json({
          status: 'error',
          message: 'Validation failed',
          errors,
        });
      }
      next(err);
    }
  };
};
