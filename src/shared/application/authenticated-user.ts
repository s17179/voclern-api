import { UserId } from '../domain/user-id';

export class AuthenticatedUser {
  constructor(private readonly _id: UserId) {}

  get id(): UserId {
    return this._id;
  }
}
