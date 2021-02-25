import { Module } from '@nestjs/common';
import { Transaction } from './shared-di-container.config';

@Module({
  providers: [Transaction],
  exports: [Transaction],
})
export class SharedModule {}
