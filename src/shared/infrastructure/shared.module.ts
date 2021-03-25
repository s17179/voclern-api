import { Global, Module } from '@nestjs/common';
import { Transaction } from './shared-di-container.config';
import { CqrsModule } from '@nestjs/cqrs';

@Global()
@Module({
  imports: [CqrsModule],
  providers: [Transaction],
  exports: [CqrsModule, Transaction],
})
export class SharedModule {}
