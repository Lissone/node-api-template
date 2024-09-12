import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { IUserCreateDTO } from '@useCases/IUserDto';

import { IUser } from '@entities/User';

// ---------------------------------------------------- //

@Entity({ name: 'users' })
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // -----------------------

  constructor(dto: IUserCreateDTO) {
    if (!dto) return;

    this.name = dto.name;
    this.email = dto.email;
    this.password = dto.password;
  }
}
