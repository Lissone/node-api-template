import { DeepPartial, Repository } from 'typeorm';

import { dbDataSource } from '@external/database/dbConfig';
import { UserEntity } from '@external/database/entities/User';

import { IUserCreateDTO } from '@useCases/IUserDto';

// ---------------------------------------------------- //

export class UserRepository {
  private repository: Repository<UserEntity>;

  constructor() {
    this.repository = dbDataSource.getRepository(UserEntity);
  }

  // -----------------------

  async getAll() {
    return this.repository.find();
  }

  async getOneByEmail(email: string) {
    return this.repository.findOneBy({ email });
  }

  async create(dto: IUserCreateDTO) {
    const user = new UserEntity(dto);
    return this.repository.save(user);
  }

  // ! remover email?
  async update(id: string, dto: DeepPartial<UserEntity>) {
    return this.repository.save(dto);
  }

  async delete(id: string) {
    return this.repository.delete(id);
  }
}
