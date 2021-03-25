import { Module } from '@nestjs/common';
import { WordController } from './word.controller';
import { VocabularyFacade } from '../application/vocabulary.facade';
import {
  CommandHandlers,
  WordEntityRepository,
  WordGroupEntityRepository,
  WordGroupRepository,
  WordRepository,
} from './vocabulary-di-container.config';
import { WordEntityMapper } from './word-entity.mapper';
import { WordGroupController } from './word-group.controller';
import { WordGroupEntityMapper } from './word-group-entity.mapper';

@Module({
  controllers: [WordController, WordGroupController],
  providers: [
    VocabularyFacade,
    ...CommandHandlers,
    WordRepository,
    WordEntityMapper,
    WordEntityRepository,
    WordGroupRepository,
    WordGroupEntityRepository,
    WordGroupEntityMapper,
  ],
})
export class VocabularyModule {}
