import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VocabularyModule } from './vocabulary/infrastructure/vocabulary.module';
import { AuthenticationModule } from './authentication/infrastructure/authentication.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [VocabularyModule, AuthenticationModule, MikroOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
