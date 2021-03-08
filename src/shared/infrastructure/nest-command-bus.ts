import { Command } from '../application/command';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class NestCommandBus {
  constructor(private readonly commandBus: CommandBus) {}

  execute<T extends Command>(command: T): Promise<any> {
    return this.commandBus.execute(command);
  }
}
