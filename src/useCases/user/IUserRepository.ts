import IUser from '@entities/IUser'

export default interface IUserRepository {
  getAll() : Promise<IUser[]>
  getOne(email: string) : Promise<IUser | null>
  post(data: IUser) : Promise<IUser>
  update(email: string, data: IUser) : Promise<boolean>
  delete(email: string) : Promise<boolean>
}