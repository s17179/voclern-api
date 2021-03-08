import { Command } from './command';

export interface ICommandBus {
  execute<T extends Command>(command: T): Promise<any>;
}
