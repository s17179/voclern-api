import { CreateWordHandler } from '../application/create-word.handler';
import { MikroOrmWordRepositoryGateway } from './mikro-orm-word.repository-gateway';
import { EntityManager } from '@mikro-orm/core';
import { MikroOrmPostgresqlWordEntityRepository } from './mikro-orm-postgresql-word-entity.repository';
import { WordEntity } from './word.entity';
import { MikroOrmPostgresqlWordGroupEntityRepository } from './mikro-orm-postgresql-word-group-entity.repository';
import { WordGroupEntity } from './word-group.entity';
import { CreateWordGroupHandler } from '../application/create-word-group.handler';
import { MikroOrmWordGroupRepositoryGateway } from './mikro-orm-word-group.repository-gateway';

export const CommandHandlers = [CreateWordHandler, CreateWordGroupHandler];

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

export const WordGroupRepository = {
  provide: 'WordGroupRepository',
  useClass: MikroOrmWordGroupRepositoryGateway,
};

export const WordGroupEntityRepository = {
  provide: MikroOrmPostgresqlWordGroupEntityRepository,
  useFactory: (entityManager: EntityManager) =>
    entityManager.getRepository(WordGroupEntity),
  inject: [EntityManager],
};
