import { UserRepository } from '../application/user.repository';
import { User } from '../domain/user';
import { UserEntityMapper } from './user-entity.mapper';
import { MikroOrmPostgresqlUserEntityRepository } from './mikro-orm-postgresql-user-entity.repository';
import { Injectable } from '@nestjs/common';
import { Email } from '../../shared/domain/email';

@Injectable()
export class MikroOrmUserRepositoryGateway implements UserRepository {
  constructor(
    private readonly mapper: UserEntityMapper,
    private readonly userEntityRepository: MikroOrmPostgresqlUserEntityRepository,
  ) {}

  register(user: User): void {
    const userEntity = this.mapper.mapToEntity(user);

    this.userEntityRepository.add(userEntity);
  }

  async getByEmail(email: Email): Promise<User> {
    const userEntity = await this.userEntityRepository.getByEmail(email);

    return this.mapper.mapToModel(userEntity);
  }
}
