import { Request, Response } from 'express'

import { IUserUseCase } from '@useCases/user/IUserUseCase'

export class UserController {
  useCase: IUserUseCase

  constructor(useCase: IUserUseCase) {
    this.useCase = useCase
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const obj = await this.useCase.getAll()

      res.json(obj)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }

  async getOne(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.params

      const obj = await this.useCase.getOne(email)

      if (!obj) {
        res.status(404).send({ message: 'User not found' })
        return
      }

      res.json(obj)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }

  async post(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req

      const obj = await await this.useCase.create(body)

      res.status(201).send(obj)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.params

      const exists = await this.useCase.getOne(email)

      if (!exists) {
        res.status(404).send({ message: 'User not found' })
        return
      }

      const result = await this.useCase.update(email, req.body)

      if (!result) {
        res.sendStatus(500)
        return
      }

      res.sendStatus(200)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.params

      const exists = await this.useCase.getOne(email)

      if (!exists) {
        res.status(404).send({ message: 'User not found' })
        return
      }

      const result = await this.useCase.delete(email)

      if (!result) {
        res.sendStatus(500)
        return
      }

      res.sendStatus(200)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }
}
