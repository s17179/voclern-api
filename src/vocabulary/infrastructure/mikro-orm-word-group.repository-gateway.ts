import { WordGroupRepository } from '../application/word-group.repository';
import { WordGroup } from '../domain/word-group';
import { MikroOrmPostgresqlWordGroupEntityRepository } from './mikro-orm-postgresql-word-group-entity.repository';
import { WordGroupEntityMapper } from './word-group-entity.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MikroOrmWordGroupRepositoryGateway implements WordGroupRepository {
  constructor(
    private readonly wordGroupEntityMapper: WordGroupEntityMapper,
    private readonly wordGroupEntityRepository: MikroOrmPostgresqlWordGroupEntityRepository,
  ) {}

  create(wordGroup: WordGroup) {
    const wordGroupEntity = this.wordGroupEntityMapper.mapToEntity(wordGroup);

    this.wordGroupEntityRepository.add(wordGroupEntity);
  }
}
