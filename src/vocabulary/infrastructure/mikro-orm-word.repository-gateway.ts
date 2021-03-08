import { WordRepository } from '../application/word.repository';
import { Word } from '../domain/word';
import { WordEntityMapper } from './word-entity.mapper';
import { MikroOrmPostgresqlWordEntityRepository } from './mikro-orm-postgresql-word-entity.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MikroOrmWordRepositoryGateway implements WordRepository {
  constructor(
    private readonly wordEntityMapper: WordEntityMapper,
    private readonly wordEntityRepository: MikroOrmPostgresqlWordEntityRepository,
  ) {}

  create(word: Word) {
    const wordEntity = this.wordEntityMapper.mapToEntity(word);

    this.wordEntityRepository.add(wordEntity);
  }
}
