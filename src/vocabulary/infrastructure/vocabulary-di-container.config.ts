import { CreateWordHandler } from '../application/create-word.handler';
import { MikroOrmWordRepositoryGateway } from './mikro-orm-word.repository-gateway';
import { EntityManager } from '@mikro-orm/core';
import { MikroOrmPostgresqlWordEntityRepository } from './mikro-orm-postgresql-word-entity.repository';
import { WordEntity } from './word.entity';

export const CommandHandlers = [CreateWordHandler];

export const WordRepository = {
  provide: 'WordRepository',
  useClass: MikroOrmWordRepositoryGateway,
};

export const WordEntityRepository = {
  provide: MikroOrmPostgresqlWordEntityRepository,
  useFactory: (entityManager: EntityManager) =>
    entityManager.getRepository(WordEntity),
  inject: [EntityManager],
};
