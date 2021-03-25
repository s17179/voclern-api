import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteWordCommand } from './delete-word.command';
import { Inject } from '@nestjs/common';
import { WordRepository } from './word.repository';
import { Transaction } from '../../shared/application/transaction';
import { Word } from '../domain/word';
import { UserId } from '../../shared/domain/user-id';
import { UnauthorizedException } from '../../shared/application/unauthorized.exception';

@CommandHandler(DeleteWordCommand)
export class DeleteWordHandler implements ICommandHandler<DeleteWordCommand> {
  constructor(
    @Inject('WordRepository') private readonly wordRepository: WordRepository,
    @Inject('Transaction') private readonly transaction: Transaction,
  ) {}

  async execute(command: DeleteWordCommand): Promise<any> {
    const word = await this.wordRepository.get(command.id);

    DeleteWordHandler.assertDoerIsAuthorized(word, command.doerId);

    try {
      await this.transaction.begin();

      this.wordRepository.delete(word);

      await this.transaction.commit();
    } catch (e) {
      await this.transaction.rollback();
      throw e;
    }
  }

  private static assertDoerIsAuthorized(word: Word, doerId: UserId): void {
    if (word.creatorId.notEquals(doerId)) {
      throw new UnauthorizedException();
    }
  }
}
