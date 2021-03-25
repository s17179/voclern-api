import { Uuid } from './uuid';

export class UserId {
  constructor(private readonly _id: Uuid) {}

  get id(): Uuid {
    return this._id;
  }

  toString(): string {
    return this._id.toString();
  }

  equals(userId: UserId): boolean {
    return this._id.equals(userId.id);
  }

  notEquals(userId: UserId): boolean {
    return !this.equals(userId);
  }
}
