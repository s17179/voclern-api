import { Module } from '@nestjs/common';
import { WordController } from './word.controller';
import { WordFacade } from '../application/word.facade';
import {
  CommandHandlers,
  WordEntityRepository,
  WordGroupEntityRepository,
  WordGroupRepository,
  WordRepository,
} from './vocabulary-di-container.config';
import { WordEntityMapper } from './word-entity.mapper';
import { WordGroupController } from './word-group.controller';
import { WordGroupFacade } from '../application/word-group.facade';
import { WordGroupEntityMapper } from './word-group-entity.mapper';

@Module({
  controllers: [WordController, WordGroupController],
  providers: [
    WordFacade,
    ...CommandHandlers,
    WordRepository,
    WordEntityMapper,
    WordEntityRepository,
    WordGroupRepository,
    WordGroupEntityRepository,
    WordGroupFacade,
    WordGroupEntityMapper,
  ],
})
export class VocabularyModule {}
