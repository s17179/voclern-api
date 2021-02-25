import { Uuid } from '../../shared/domain/uuid';
import { Email } from '../../shared/domain/email';
import { Password } from '../domain/password';

export class RegisteredUser {
  constructor(
    private readonly _id: Uuid,
    private readonly _email: Email,
    private readonly _password: Password,
  ) {}

  get id(): Uuid {
    return this._id;
  }

  get email(): Email {
    return this._email;
  }

  get password(): Password {
    return this._password;
  }
}
