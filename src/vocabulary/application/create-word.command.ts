import { UserId } from '../../shared/domain/user-id';
import { WordId } from '../domain/word-id';
import { WordGroupId } from '../domain/word-group-id';

export class CreateWordCommand {
  constructor(
    public readonly id: WordId,
    public readonly doerId: UserId,
    public readonly value: string,
    public readonly translation: string,
    public readonly wordGroupId: WordGroupId,
  ) {}
}
