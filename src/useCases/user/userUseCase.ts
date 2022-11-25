import { IUser } from '@entities/IUser'

import { IUserRepository } from './IUserRepository'
import { IUserUseCase } from './IUserUseCase'

export class UserUseCase implements IUserUseCase {
  repository: IUserRepository

  constructor(repository: IUserRepository) {
    this.repository = repository
  }

  async getAll(): Promise<IUser[]> {
    try {
      return await this.repository.getAll()
    } catch (err) {
      throw new Error(err)
    }
  }

  async getOne(email: string): Promise<IUser | null> {
    try {
      return await this.repository.getOne(email)
    } catch (err) {
      throw new Error(err)
    }
  }

  async create(data: IUser): Promise<IUser> {
    try {
      return await this.repository.create(data)
    } catch (err) {
      throw new Error(err)
    }
  }

  async update(email: string, data: IUser): Promise<IUser> {
    try {
      return await this.repository.update(email, data)
    } catch (err) {
      throw new Error(err)
    }
  }

  async delete(email: string): Promise<boolean> {
    try {
      const user = await this.repository.delete(email)
      return user !== null
    } catch (err) {
      throw new Error(err)
    }
  }
}
