import { Request, Response, Router } from 'express';

import { UpdateUserDTO, UserEmailParamDTO, createUserBodySchema, updateUserBodySchema, userEmailParamSchema } from '@external/dtos/UserDTO';
import { validateDTO } from '@external/middlewares/validateDTO';

import { UserController } from '@controllers/userController';

import { UserUseCase } from '@useCases/userUseCase';

import { UserRepository } from '@repositories/userRepository';

// ---------------------------------------------------- //

export const userRoutes = Router();

const userRepository = new UserRepository();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

userRoutes.get('/', (req, res) => userController.getAll(req, res));
userRoutes.get(
  '/:email',
  validateDTO(userEmailParamSchema, 'params'),
  (req: Request<UserEmailParamDTO>, res) => userController.getOneByEmail(req, res),
);
userRoutes.post(
  '/',
  validateDTO(createUserBodySchema, 'body'),
  (req, res) => userController.create(req, res),
);
userRoutes.patch(
  '/:email',
  validateDTO(userEmailParamSchema, 'params'),
  validateDTO(updateUserBodySchema, 'body'),
  (
    req: Request<UserEmailParamDTO, object, UpdateUserDTO>,
    res: Response,
  ) => userController.update(req, res),
);
userRoutes.delete(
  '/:email',
  validateDTO(userEmailParamSchema, 'params'),
  (req: Request<UserEmailParamDTO>, res) => userController.delete(req, res),
);
