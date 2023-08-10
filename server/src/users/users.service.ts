import { Injectable } from '@nestjs/common';
import { User, Skill } from './user.model';

@Injectable()
export class UsersService {
  private users: User[] = [];

  // Methods to manage users and skills { add, edit, remove, ...}
}
