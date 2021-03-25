import { Injectable } from '@nestjs/common';
import { CreateWordCommand } from './create-word.command';
import { Uuid } from '../../shared/domain/uuid';
import { UserId } from '../../shared/domain/user-id';
import { WordId } from '../domain/word-id';
import { CreateWordContract } from './create-word.contract';
import { UpdateWordContract } from './update-word.contract';
import { UpdateWordCommand } from './update-word.command';
import { CreateWordGroupContract } from './create-word-group.contract';
import { CreateWordGroupCommand } from './create-word-group.command';
import { WordGroupId } from '../domain/word-group-id';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class VocabularyFacade {
  constructor(private readonly commandBus: CommandBus) {}

  createWord(contract: CreateWordContract, doerId: UserId): Promise<void> {
    return this.commandBus.execute(
      new CreateWordCommand(
        new WordId(Uuid.fromExisting(contract.id)),
        doerId,
        contract.value,
        contract.translation,
        new WordGroupId(Uuid.fromExisting(contract.wordGroupId)),
      ),
    );
  }

  updateWord(contract: UpdateWordContract, doerId: UserId): Promise<void> {
    return this.commandBus.execute(
      new UpdateWordCommand(
        new WordId(Uuid.fromExisting(contract.id)),
        doerId,
        contract.value,
        contract.translation,
      ),
    );
  }

  createWordGroup(
    contract: CreateWordGroupContract,
    doerId: UserId,
  ): Promise<void> {
    return this.commandBus.execute(
      new CreateWordGroupCommand(
        new WordGroupId(Uuid.fromExisting(contract.id)),
        contract.name,
        doerId,
      ),
    );
  }
}
