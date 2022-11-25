import UserSchema from '@external/database/entities/UserSchema'

import { IUserRepository } from '@useCases/user/IUserRepository'

import { IUser } from '@entities/IUser'

export class UserRepository implements IUserRepository {
  async getAll(): Promise<IUser[]> {
    return UserSchema.find({})
  }

  async getOne(email: string): Promise<IUser | null> {
    return UserSchema.findOne({ email })
  }

  async create(data: IUser): Promise<IUser> {
    return UserSchema.create(data)
  }

  async update(email: string, data: IUser): Promise<IUser> {
    return UserSchema.findOneAndUpdate({ email }, data)
  }

  async delete(email: string): Promise<IUser> {
    return UserSchema.findOneAndDelete({ email })
  }
}
