import { EntityRepository } from '@mikro-orm/postgresql';
import { WordEntity } from './word.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from '@mikro-orm/core';

@Injectable()
@Repository(WordEntity)
export class MikroOrmPostgresqlWordEntityRepository extends EntityRepository<WordEntity> {
  add(wordEntity: WordEntity) {
    this.persist(wordEntity);
  }
}
