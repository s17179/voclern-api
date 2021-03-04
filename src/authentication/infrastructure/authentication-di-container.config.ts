import { MikroOrmPostgresqlUserEntityRepository } from './mikro-orm-postgresql-user-entity.repository';
import { EntityManager } from '@mikro-orm/core';
import { UserEntity } from './user.entity';
import { MikroOrmUserRepositoryGateway } from './mikro-orm-user.repository-gateway';
import { BcryptPasswordEncryptor } from './bcrypt-password.encryptor';

export const UserEntityRepository = {
  provide: MikroOrmPostgresqlUserEntityRepository,
  useFactory: (entityManager: EntityManager) =>
    entityManager.getRepository(UserEntity),
  inject: [EntityManager],
};

export const UserRepository = {
  provide: 'UserRepository',
  useClass: MikroOrmUserRepositoryGateway,
};

export const PasswordEncryptor = {
  provide: 'PasswordEncryptor',
  useClass: BcryptPasswordEncryptor,
};
