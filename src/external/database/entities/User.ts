import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UserCreateDTO } from '@adapters/dtos/UserDTO';

import { User } from '@entities/User';

// ---------------------------------------------------- //

@Entity({ name: 'users' })
export class UserEntity implements User {
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

  constructor(dto: UserCreateDTO) {
    if (!dto) return;

    this.name = dto.name;
    this.email = dto.email;
    this.password = dto.password;
  }
}
