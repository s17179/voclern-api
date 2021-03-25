import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateWordCommand } from './create-word.command';
import { Word } from '../domain/word';
import { Inject } from '@nestjs/common';
import { WordRepository } from './word.repository';
import { Transaction } from '../../shared/application/transaction';

@CommandHandler(CreateWordCommand)
export class CreateWordHandler implements ICommandHandler<CreateWordCommand> {
  constructor(
    @Inject('WordRepository') private readonly wordRepository: WordRepository,
    @Inject('Transaction') private readonly transaction: Transaction,
  ) {}

  async execute(command: CreateWordCommand): Promise<any> {
    const { id, doerId, value, translation, wordGroupId } = command;

    const word = new Word(id, doerId, value, translation, wordGroupId);

    try {
      await this.transaction.begin();

      this.wordRepository.create(word);

      await this.transaction.commit();
    } catch (e) {
      await this.transaction.rollback();
      throw e;
    }
  }
}
