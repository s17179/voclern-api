import { Module } from '@nestjs/common';
import { WordController } from './word.controller';
import { WordFacade } from '../application/word.facade';
import {
  CommandHandlers,
  WordEntityRepository,
  WordRepository,
} from './vocabulary-di-container.config';
import { WordEntityMapper } from './word-entity.mapper';

@Module({
  controllers: [WordController],
  providers: [
    WordFacade,
    ...CommandHandlers,
    WordRepository,
    WordEntityMapper,
    WordEntityRepository,
  ],
})
export class VocabularyModule {}
