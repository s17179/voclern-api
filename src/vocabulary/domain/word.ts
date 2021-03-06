import { UserId } from '../../shared/domain/user-id';
import { WordId } from './word-id';
import { WordGroupId } from './word-group-id';

export class Word {
  constructor(
    protected readonly _id: WordId,
    protected readonly _creatorId: UserId,
    protected _value: string,
    protected _translation: string,
    protected readonly _wordGroupId: WordGroupId,
  ) {}

  get id(): WordId {
    return this._id;
  }

  get creatorId(): UserId {
    return this._creatorId;
  }

  set value(value: string) {
    this._value = value;
  }

  set translation(value: string) {
    this._translation = value;
  }

  get wordGroupId(): WordGroupId {
    return this._wordGroupId;
  }
}
