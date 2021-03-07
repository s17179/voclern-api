import { CommandBus } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { CreateWordCommand } from './create-word.command';

@Injectable()
export class WordFacade {
  constructor(private readonly commandBus: CommandBus) {}

  create(command: CreateWordCommand): void {
    this.commandBus.execute(command);
  }
}
