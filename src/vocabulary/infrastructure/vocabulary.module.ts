import { Module } from '@nestjs/common';
import { WordController } from './word.controller';
import { WordFacade } from '../application/word.facade';
import { CqrsModule } from '@nestjs/cqrs';
import {
  CommandHandlers,
  WordRepository,
} from './vocabulary-di-container.config';

@Module({
  imports: [CqrsModule],
  controllers: [WordController],
  providers: [WordFacade, ...CommandHandlers, WordRepository],
})
export class VocabularyModule {}
