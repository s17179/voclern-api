import { EntityRepository } from '@mikro-orm/postgresql';
import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from '@mikro-orm/core';
import { Email } from '../../shared/domain/email';

@Injectable()
@Repository(UserEntity)
export class MikroOrmPostgresqlUserEntityRepository extends EntityRepository<UserEntity> {
  add(user: UserEntity): void {
    this.em.persist(user);
  }

  async getByEmail(email: Email): Promise<UserEntity> {
    return await this.em.findOneOrFail(UserEntity, { email });
  }
}
