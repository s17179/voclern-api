import { Uuid } from './uuid';

export class UserId {
  constructor(private readonly _id: Uuid) {}

  get id(): Uuid {
    return this._id;
  }

  toString(): string {
    return this._id.toString();
  }
}
