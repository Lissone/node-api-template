import IUser from '@entities/IUser'
import UserDB from '@external/database/entities/UserSchema'
import IUserRepository from '@useCases/user/IUserRepository'

export class UserRepository implements IUserRepository {
  async getAll () : Promise<IUser[]> {
    const ret = await UserDB.find({})

    return ret
  }

  async getOne (email: string) : Promise<IUser | null> {
    const ret: IUser | null = await UserDB.findOne({ 'email': email })

    return ret
  }

  async post (data: IUser) : Promise<IUser> {
    const ret = await UserDB.create(data)

    return ret
  }

  async update (email: string, data: IUser) : Promise<boolean> {
    const ret = await UserDB.updateOne({ 'email': email }, data)

    return ret !== null ? true : false
  }

  async delete (email: string) : Promise<boolean> {
    const ret = await UserDB.deleteOne({ 'email': email })

    return ret !== null ? true : false
  }
}