import { Uuid } from '../../shared/domain/uuid';

export class WordId {
  constructor(private readonly _id: Uuid) {}

  get id(): Uuid {
    return this._id;
  }

  toString(): string {
    return this._id.toString();
  }
}
