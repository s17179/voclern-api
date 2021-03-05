import { Uuid } from '../../shared/domain/uuid';
import { Email } from '../../shared/domain/email';
import { Password } from './password';

export class User {
  constructor(
    protected readonly _id: Uuid,
    protected readonly _email: Email,
    protected readonly _password: Password,
  ) {}

  static register(id: Uuid, email: Email, password: Password): User {
    return new User(id, email, password);
  }
}
