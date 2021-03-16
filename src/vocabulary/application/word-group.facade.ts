import { Inject, Injectable } from '@nestjs/common';
import { ICommandBus } from '../../shared/application/i-command-bus';
import { CreateWordGroupContract } from './create-word-group.contract';
import { UserId } from '../../shared/domain/user-id';
import { CreateWordGroupCommand } from './create-word-group.command';
import { WordGroupId } from '../domain/word-group-id';
import { Uuid } from '../../shared/domain/uuid';

@Injectable()
export class WordGroupFacade {
  constructor(
    @Inject('ICommandBus') private readonly commandBus: ICommandBus,
  ) {}

  create(contract: CreateWordGroupContract, doerId: UserId): Promise<void> {
    return this.commandBus.execute(
      new CreateWordGroupCommand(
        new WordGroupId(Uuid.fromExisting(contract.id)),
        contract.name,
        doerId,
      ),
    );
  }
}
