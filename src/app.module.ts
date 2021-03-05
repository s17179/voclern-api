import { Module } from '@nestjs/common';
import { VocabularyModule } from './vocabulary/infrastructure/vocabulary.module';
import { AuthenticationModule } from './authentication/infrastructure/authentication.module';
import { SharedModule } from './shared/infrastructure/shared.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [
    InfrastructureModule,
    SharedModule,
    AuthenticationModule,
    VocabularyModule,
  ],
})
export class AppModule {}
