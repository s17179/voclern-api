import { Global, Module } from '@nestjs/common';
import { ICommandBus, Transaction } from './shared-di-container.config';
import { CqrsModule } from '@nestjs/cqrs';

@Global()
@Module({
  imports: [CqrsModule],
  providers: [Transaction, ICommandBus],
  exports: [CqrsModule, Transaction, ICommandBus],
})
export class SharedModule {}
