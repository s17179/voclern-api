import { EntityRepository } from '@mikro-orm/postgresql';
import { WordGroupEntity } from './word-group.entity';
import { Repository } from '@mikro-orm/core';

@Repository(WordGroupEntity)
export class MikroOrmPostgresqlWordGroupEntityRepository extends EntityRepository<WordGroupEntity> {
  add(wordGroupEntity: WordGroupEntity) {
    this.persist(wordGroupEntity);
  }
}
