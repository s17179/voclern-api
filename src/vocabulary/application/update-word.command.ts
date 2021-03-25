import { UserId } from '../../shared/domain/user-id';
import { WordId } from '../domain/word-id';

export class UpdateWordCommand {
  constructor(
    public readonly id: WordId,
    public readonly doerId: UserId,
    public readonly value: string,
    public readonly translation: string,
  ) {}
}
