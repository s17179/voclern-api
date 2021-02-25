import { UserRepository } from '../application/user.repository';
import { RegisteredUser } from '../application/registered-user';
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

  async register(registeredUser: RegisteredUser): Promise<void> {
    const userEntity = await this.mapper.mapToEntity(registeredUser);

    this.userEntityRepository.add(userEntity);
  }

  async getByEmail(email: Email): Promise<RegisteredUser> {
    const userEntity = await this.userEntityRepository.getByEmail(email);

    return this.mapper.mapToRegisteredUser(userEntity);
  }
}
