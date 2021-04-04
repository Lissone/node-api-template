import { Router } from 'express'
import { UserRepository } from '@repositories/userRepository'
import { UserController } from './userController'

const userRoutes = Router()
const userRepository = new UserRepository()
const userController = new UserController(userRepository)

userRoutes.get('/', (req, res) => userController.getAll(req, res))
userRoutes.get('/:email', (req, res) => userController.getOne(req, res))
userRoutes.post('/', (req, res) => userController.post(req, res))
userRoutes.put('/', (req, res) => userController.update(req, res))
userRoutes.delete('/', (req, res) => userController.delete(req, res))

export { userRoutes }