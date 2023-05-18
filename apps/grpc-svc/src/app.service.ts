import { Injectable } from '@nestjs/common';
import { CreateRequest, User } from './proto/user.pb';
import { uuid } from 'uuidv4';

@Injectable()
export class AppService {
  private readonly users: User[] = [];

  create(user: CreateRequest): Promise<User> {
    const newUser: User = {
      id: uuid(),
      ...user,
      type: 'admin',
    };
    this.users.push(newUser);
    return Promise.resolve(newUser);
  }

  list(): Promise<User[]> {
    return Promise.resolve(this.users);
  }
}
