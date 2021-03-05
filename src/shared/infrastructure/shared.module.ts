import { Global, Module } from '@nestjs/common';
import { Transaction } from './shared-di-container.config';

@Global()
@Module({
  providers: [Transaction],
  exports: [Transaction],
})
export class SharedModule {}
