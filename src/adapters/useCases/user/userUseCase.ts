import { IUser } from '@entities/IUser';

import { IUserRepository } from './IUserRepository';
import { IUserUseCase } from './IUserUseCase';

// ---------------------------------------------------- //

export class UserUseCase implements IUserUseCase {
  repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  async getAll() {
    return await this.repository.getAll();
  }

  async getOne(email: string) {
    return await this.repository.getOne(email);
  }

  async create(data: IUser) {
    return await this.repository.create(data);
  }

  async update(email: string, data: IUser) {
    return await this.repository.update(email, data);
  }

  async delete(email: string) {
    const user = await this.repository.delete(email);
    return user !== null;
  }
}
