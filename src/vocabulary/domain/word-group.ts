import { WordGroupId } from './word-group-id';
import { UserId } from '../../shared/domain/user-id';

export class WordGroup {
  constructor(
    protected readonly _id: WordGroupId,
    protected readonly _creatorId: UserId,
    protected readonly _name: string,
  ) {}
}
