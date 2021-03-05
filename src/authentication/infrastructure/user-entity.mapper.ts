import { User } from '../domain/user';
import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';
import { UserModelGetter } from './user-model.getter';

@Injectable()
export class UserEntityMapper {
  mapToEntity(user: User): UserEntity {
    const userModelGetter = UserModelGetter.fromUser(user);

    return new UserEntity(
      userModelGetter.id,
      userModelGetter.email,
      userModelGetter.password,
    );
  }

  mapToModel(userEntity: UserEntity): User {
    return new UserModelGetter(
      userEntity.id,
      userEntity.email,
      userEntity.password,
    );
  }
}
