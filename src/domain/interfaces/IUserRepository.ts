import { User } from '@entities/user'

export interface IUserRepository {
  getAll() : Promise<typeof User[]>
  getOne(email: string) : Promise<typeof User | undefined>
  post(data: typeof User) : Promise<typeof User>
  update(email: string, data: typeof User) : Promise<void>
  delete(id: string) : Promise<void>
}