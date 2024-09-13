import { Repository } from 'typeorm';

import { UserCreateDTO } from '@adapters/dtos/UserDTO';

import { dbDataSource } from '@external/database/dbConfig';
import { UserEntity } from '@external/database/entities/User';

import { User } from '@entities/User';

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

  async create(dto: UserCreateDTO) {
    const user = new UserEntity(dto);
    return this.repository.save(user);
  }

  async update(dto: User) {
    return this.repository.save(dto);
  }

  async delete(id: string) {
    return this.repository.delete(id);
  }
}
