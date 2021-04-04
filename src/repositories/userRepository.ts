import { IUserRepository } from '@interfaces/IUserRepository'
import { User } from '@entities/user'

export class UserRepository implements IUserRepository {
  async getAll () : Promise<typeof User[]> {
    const ret = await User.find({})

    return ret
  }

  async getOne (email: string) : Promise<typeof User | undefined> {
    const ret = await User.findOne({ 'email': email })

    return ret
  }

  async post (data: typeof User) : Promise<typeof User> {
    const ret = await User.create(data)

    return ret
  }

  async update (email: string, data: typeof User) : Promise<void> {
    const ret = await User.updateOne({ 'email': email }, data)

    return ret
  }

  async delete (email: string) : Promise<void> {
    const ret = await User.deleteOne({ 'email': email })

    return ret
  } 
 }