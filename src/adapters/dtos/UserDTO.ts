export interface UserCreateDTO {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}

export interface UserUpdateDTO {
  readonly name?: string;
  readonly email?: string;
  readonly password?: string;
}

