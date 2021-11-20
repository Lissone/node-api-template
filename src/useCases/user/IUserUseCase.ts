import { IUser } from '@entities/IUser'

export interface IUserUseCase {
  getAll(): Promise<IUser[]>
  getOne(email: string): Promise<IUser | null>
  create(data: IUser): Promise<IUser>
  update(email: string, data: IUser): Promise<boolean>
  delete(email: string): Promise<boolean>
}
