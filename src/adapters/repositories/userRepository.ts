import { IUser } from '@entities/IUser'
import { IUserRepository } from '@useCases/user/IUserRepository'
import UserSchema from '@external/database/entities/UserSchema'

export class UserRepository implements IUserRepository {
  async getAll(): Promise<IUser[]> {
    const ret = await UserSchema.find({})

    return ret
  }

  async getOne(email: string): Promise<IUser | null> {
    const ret = await UserSchema.findOne({ email })

    return ret
  }

  async create(data: IUser): Promise<IUser> {
    const ret = await UserSchema.create(data)

    return ret
  }

  async update(email: string, data: IUser): Promise<boolean> {
    const ret = await UserSchema.updateOne({ email }, data)

    return ret !== null
  }

  async delete(email: string): Promise<boolean> {
    const ret = await UserSchema.deleteOne({ email })

    return ret !== null
  }
}
