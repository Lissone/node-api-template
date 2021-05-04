import express from 'express'
import { userRoutes } from './userRoutes'

const apiRoutes = express.Router()

apiRoutes.use('/api/v1/user', userRoutes)

export { apiRoutes }