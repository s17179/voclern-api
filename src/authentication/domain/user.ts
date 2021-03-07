import { Email } from '../../shared/domain/email';
import { Password } from './password';
import { UserId } from '../../shared/domain/user-id';

export class User {
  constructor(
    protected readonly _id: UserId,
    protected readonly _email: Email,
    protected readonly _password: Password,
  ) {}

  static register(id: UserId, email: Email, password: Password): User {
    return new User(id, email, password);
  }
}
