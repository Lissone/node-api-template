import { CreateUserDTO, UpdateUserDTO } from '@external/dtos/UserDTO';

import { UserRepository } from '@repositories/userRepository';

import { HttpException } from '@shared/exceptions/httpException';
import { MSG } from '@shared/msg';

// ---------------------------------------------------- //

export class UserUseCase {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  // -----------------------

  async getAll() {
    return this.repository.getAll();
  }

  async getOneByEmail(email: string) {
    const user = await this.repository.getOneByEmail(email);
    if (!user) {
      throw new HttpException(404, MSG.USER_NOT_FOUND);
    }

    return user;
  }

  async create(user: CreateUserDTO) {
    return this.repository.create(user);
  }

  async update(email: string, dto: UpdateUserDTO) {
    const user = await this.repository.getOneByEmail(email);
    if (!user) {
      throw new HttpException(404, MSG.USER_NOT_FOUND);
    }

    return this.repository.update({ ...user, ...dto });
  }

  async delete(email: string) {
    const user = await this.repository.getOneByEmail(email);
    if (!user) {
      throw new HttpException(404, MSG.USER_NOT_FOUND);
    }

    await this.repository.delete(user.id);

    return true;
  }
}
