import { UserMapper } from '../application/user.mapper';
import { User } from '../domain/user';
import { AuthenticatedUser } from '../../shared/application/authenticated-user';
import { UserModelGetter } from './user-model.getter';

export class ReflectionUserMapper implements UserMapper {
  mapToAuthenticatedUser(user: User): AuthenticatedUser {
    const userModelGetter = UserModelGetter.fromUser(user);

    return new AuthenticatedUser(userModelGetter.id);
  }
}
