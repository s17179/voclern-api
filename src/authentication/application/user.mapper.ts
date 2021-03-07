import { User } from '../domain/user';
import { AuthenticatedUser } from '../../shared/application/authenticated-user';

export interface UserMapper {
  mapToAuthenticatedUser(user: User): AuthenticatedUser;
}
