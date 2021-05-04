import IUserRepository from '@useCases/user/IUserRepository'
import { Request, Response } from 'express'

export class UserController {
  repository: IUserRepository

  constructor (repository: IUserRepository) {
    this.repository = repository
  }

  async getAll (req: Request, res: Response) : Promise<void> {
    try {
      const obj = await this.repository.getAll()

      res.json(obj)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }

  async getOne (req: Request, res: Response) : Promise<void> {
    try {
      const email = req.params.email

      const obj = await this.repository.getOne(email)

      if(!obj) {
        res.status(404).send({ message: 'User not found'})
        return
      }

      res.json(obj)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }

  async post (req: Request, res: Response) : Promise<void> {
    try {
      const body = req.body

      const obj = await await this.repository.post(body)

      res.status(201).send(obj)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }

  async update (req: Request, res: Response) : Promise<void> {
    try {
      const email = req.params.email

      const exists = await this.repository.getOne(email)

      if(!exists) {
        res.status(404).send({ message: 'User not found'})
        return
      }

      const result = await this.repository.update(email, req.body)

      if(!result) {
        res.sendStatus(500)
        return
      }

      res.sendStatus(200)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }

  async delete (req: Request, res: Response) : Promise<void> {
    try {
      const email = req.params.email

      const exists = await this.repository.getOne(email)

      if(!exists) {
        res.status(404).send({ message: 'User not found'})
        return
      }

      const result = await this.repository.delete(email)

      if(!result) {
        res.sendStatus(500)
        return
      }

      res.sendStatus(200)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  } 
}

