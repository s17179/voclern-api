import { UserId } from '../../shared/domain/user-id';
import { WordId } from './word-id';

export class Word {
  constructor(
    protected readonly _id: WordId,
    protected readonly _creatorId: UserId,
    protected readonly _value: string,
    protected readonly _translation: string,
  ) {}
}
