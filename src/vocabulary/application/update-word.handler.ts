import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateWordCommand } from './update-word.command';
import { Inject } from '@nestjs/common';
import { Transaction } from '../../shared/application/transaction';
import { WordRepository } from './word.repository';
import { Word } from '../domain/word';
import { UserId } from '../../shared/domain/user-id';
import { UnauthorizedException } from '../../shared/application/unauthorized.exception';

@CommandHandler(UpdateWordCommand)
export class UpdateWordHandler implements ICommandHandler<UpdateWordCommand> {
  constructor(
    @Inject('WordRepository') private readonly wordRepository: WordRepository,
    @Inject('Transaction') private readonly transaction: Transaction,
  ) {}

  async execute(command: UpdateWordCommand): Promise<any> {
    const word = await this.wordRepository.get(command.id);

    UpdateWordHandler.assertDoerIsAuthorized(word, command.doerId);

    UpdateWordHandler.updateWord(word, command);

    try {
      await this.transaction.begin();

      await this.wordRepository.update(word);

      await this.transaction.commit();
    } catch (e) {
      await this.transaction.rollback();
      throw e;
    }
  }

  private static updateWord(word: Word, command: UpdateWordCommand): void {
    word.value = command.value;
    word.translation = command.translation;
  }

  private static assertDoerIsAuthorized(word: Word, doerId: UserId): void {
    if (word.creatorId.notEquals(doerId)) {
      throw new UnauthorizedException();
    }
  }
}
