import { RegisteredUser } from '../application/registered-user';
import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserEntityMapper {
  async mapToEntity(registeredUser: RegisteredUser): Promise<UserEntity> {
    return new UserEntity(
      registeredUser.id,
      registeredUser.email,
      registeredUser.password,
    );
  }

  mapToRegisteredUser(userEntity: UserEntity): RegisteredUser {
    return new RegisteredUser(
      userEntity.id,
      userEntity.email,
      userEntity.password,
    );
  }
}
