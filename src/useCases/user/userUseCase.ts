import { IUserRepository } from './IUserRepository'
import { IUserUseCase } from './IUserUseCase'

import { IUser } from '@entities/IUser'

export class UserUseCase implements IUserUseCase {
  repository: IUserRepository

  constructor(repository: IUserRepository) {
    this.repository = repository
  }

  async getAll(): Promise<IUser[]> {
    try {
      const ret = await this.repository.getAll()

      return ret
    } catch (err) {
      throw new Error(err)
    }
  }

  async getOne(email: string): Promise<IUser | null> {
    try {
      const ret = await this.repository.getOne(email)

      return ret
    } catch (err) {
      throw new Error(err)
    }
  }

  async create(data: IUser): Promise<IUser> {
    try {
      const ret = await this.repository.create(data)

      return ret
    } catch (err) {
      throw new Error(err)
    }
  }

  async update(email: string, data: IUser): Promise<boolean> {
    try {
      const ret = await this.repository.update(email, data)

      return ret !== null
    } catch (err) {
      throw new Error(err)
    }
  }

  async delete(email: string): Promise<boolean> {
    try {
      const ret = await this.repository.delete(email)

      return ret !== null
    } catch (err) {
      throw new Error(err)
    }
  }
}
