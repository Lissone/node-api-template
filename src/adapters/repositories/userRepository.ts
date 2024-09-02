import { UserSchema } from '@external/database/entities/UserSchema';

import { IUserRepository } from '@useCases/user/IUserRepository';

import { IUser } from '@entities/IUser';

// ---------------------------------------------------- //

export class UserRepository implements IUserRepository {
  async getAll() {
    return UserSchema.find({});
  }

  async getOne(email: string) {
    return UserSchema.findOne({ email });
  }

  async create(data: IUser) {
    return UserSchema.create(data);
  }

  async update(email: string, data: IUser) {
    return UserSchema.findOneAndUpdate({ email }, data);
  }

  async delete(email: string) {
    return UserSchema.findOneAndDelete({ email });
  }
}
