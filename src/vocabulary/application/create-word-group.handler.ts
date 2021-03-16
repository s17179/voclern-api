import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateWordGroupCommand } from './create-word-group.command';
import { WordGroup } from '../domain/word-group';
import { Inject } from '@nestjs/common';
import { Transaction } from '../../shared/application/transaction';
import { WordGroupRepository } from './word-group.repository';

@CommandHandler(CreateWordGroupCommand)
export class CreateWordGroupHandler
  implements ICommandHandler<CreateWordGroupCommand> {
  constructor(
    @Inject('Transaction') private readonly transaction: Transaction,
    @Inject('WordGroupRepository')
    private readonly wordGroupRepository: WordGroupRepository,
  ) {}

  async execute(command: CreateWordGroupCommand): Promise<any> {
    const { id, doerId, name } = command;

    const wordGroup = new WordGroup(id, doerId, name);

    try {
      await this.transaction.begin();

      this.wordGroupRepository.create(wordGroup);

      await this.transaction.commit();
    } catch (e) {
      await this.transaction.rollback();
      throw e;
    }
  }
}
