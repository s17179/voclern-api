import { WordGroupId } from '../domain/word-group-id';
import { UserId } from '../../shared/domain/user-id';

export class CreateWordGroupCommand {
  constructor(
    public readonly id: WordGroupId,
    public readonly name: string,
    public readonly doerId: UserId,
  ) {}
}
