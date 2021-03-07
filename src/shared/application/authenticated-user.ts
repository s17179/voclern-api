import { Email } from '../domain/email';
import { UserId } from '../domain/user-id';

export class AuthenticatedUser {
  constructor(private readonly _id: UserId, private readonly _email: Email) {}

  get id(): UserId {
    return this._id;
  }

  get email(): Email {
    return this._email;
  }
}
