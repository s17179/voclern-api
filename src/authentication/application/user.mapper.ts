import { User } from '../domain/user';
import { AuthenticatedUser } from './authenticated-user';

export interface UserMapper {
  mapToAuthenticatedUser(user: User): AuthenticatedUser;
}
