import { Request, Response } from 'express'

import { IUserUseCase } from '@useCases/user/IUserUseCase'

import { MSG } from '@shared/msg'

export class UserController {
  private readonly useCase: IUserUseCase

  constructor(useCase: IUserUseCase) {
    this.useCase = useCase
  }

  async getAll(req: Request, res: Response) {
    try {
      const users = await this.useCase.getAll()
      return res.status(200).json(users)
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { email } = req.params

      const user = await this.useCase.getOne(email)
      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      return res.status(200).json(user)
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { body } = req
      const user = await this.useCase.create(body)
      return res.status(201).json(user)
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { email } = req.params

      let user = await this.useCase.getOne(email)
      if (!user) {
        return res.status(404).json({ message: MSG.USER_NOT_FOUND })
      }

      user = await this.useCase.update(email, req.body)

      return res.status(200).json(user)
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { email } = req.params

      const user = await this.useCase.getOne(email)
      if (!user) {
        return res.status(404).json({ message: MSG.USER_NOT_FOUND })
      }

      await this.useCase.delete(email)

      return res.sendStatus(200)
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  }
}
