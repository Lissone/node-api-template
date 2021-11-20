import { Router } from 'express'

import { UserRepository } from '@repositories/userRepository'
import { UserUseCase } from '@useCases/user/userUseCase'
import { UserController } from '@controllers/userController'

const userRoutes = Router()

const userRepository = new UserRepository()
const userUseCase = new UserUseCase(userRepository)
const userController = new UserController(userUseCase)

userRoutes.get('/', (req, res) => userController.getAll(req, res))
userRoutes.get('/:email', (req, res) => userController.getOne(req, res))
userRoutes.post('/', (req, res) => userController.post(req, res))
userRoutes.put('/:email', (req, res) => userController.update(req, res))
userRoutes.delete('/:email', (req, res) => userController.delete(req, res))

export { userRoutes }
