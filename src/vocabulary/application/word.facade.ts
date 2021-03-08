import { Inject, Injectable } from '@nestjs/common';
import { CreateWordCommand } from './create-word.command';
import { Uuid } from '../../shared/domain/uuid';
import { UserId } from '../../shared/domain/user-id';
import { WordId } from '../domain/word-id';
import { CreateWordContract } from './create-word.contract';
import { ICommandBus } from '../../shared/application/i-command-bus';

@Injectable()
export class WordFacade {
  constructor(
    @Inject('ICommandBus') private readonly commandBus: ICommandBus,
  ) {}

  create(contract: CreateWordContract, doerId: UserId): Promise<void> {
    return this.commandBus.execute(
      new CreateWordCommand(
        new WordId(Uuid.fromExisting(contract.id)),
        doerId,
        contract.value,
        contract.translation,
      ),
    );
  }
}
