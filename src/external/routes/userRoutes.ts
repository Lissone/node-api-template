import { Router } from 'express';

import { UserController } from '@controllers/userController';

import { UserUseCase } from '@useCases/userUseCase';

import { UserRepository } from '@repositories/userRepository';

// ---------------------------------------------------- // //

export const userRoutes = Router();

const userRepository = new UserRepository();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

userRoutes.get('/', (req, res) => userController.getAll(req, res));
userRoutes.get('/:email', (req, res) => userController.getOneByEmail(req, res));
userRoutes.post('/', (req, res) => userController.create(req, res));
userRoutes.put('/:email', (req, res) => userController.update(req, res));
userRoutes.delete('/:email', (req, res) => userController.delete(req, res));
