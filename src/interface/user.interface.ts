export interface IUser {
  id: number;
  first_name: string;
  last_name?: string;
  email: string;
  birthday: Date;
  gender: string;
  password: string;
}

export interface UpdateUserDto {
  first_name: string;
  last_name?: string;
  email: string;
  birthday: Date;
  gender: string;
  password: string;
}

export interface CreateUserDto {
  first_name: string;
  last_name?: string;
  email: string;
  birthday: Date;
  gender: string;
  password: string;
}
