import { UserId } from '../../shared/domain/user-id';
import { WordId } from '../domain/word-id';
import { Command } from '../../shared/application/command';

export class CreateWordCommand implements Command {
  constructor(
    public readonly id: WordId,
    public readonly doerId: UserId,
    public readonly value: string,
    public readonly translation: string,
  ) {}
}
