import { Command } from '../../shared/application/command';
import { WordGroupId } from '../domain/word-group-id';
import { UserId } from '../../shared/domain/user-id';

export class CreateWordGroupCommand implements Command {
  constructor(
    public readonly id: WordGroupId,
    public readonly name: string,
    public readonly doerId: UserId,
  ) {}
}
