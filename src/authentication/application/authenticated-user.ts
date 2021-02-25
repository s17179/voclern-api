import { Uuid } from '../../shared/domain/uuid';
import { Email } from '../../shared/domain/email';

export class AuthenticatedUser {
  constructor(private readonly _id: Uuid, private readonly _email: Email) {}

  get id(): Uuid {
    return this._id;
  }

  get email(): Email {
    return this._email;
  }
}
