import { Module } from '@nestjs/common';
import { VocabularyModule } from './vocabulary/infrastructure/vocabulary.module';
import { AuthenticationModule } from './authentication/infrastructure/authentication.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { SharedModule } from './shared/infrastructure/shared.module';

@Module({
  imports: [
    VocabularyModule,
    AuthenticationModule,
    MikroOrmModule.forRoot(),
    SharedModule,
  ],
})
export class AppModule {}
