import { RegisteredUser } from './registered-user';
import { AuthenticatedUser } from './authenticated-user';

export class UserMapper {
  mapToAuthenticatedUser(registeredUser: RegisteredUser): AuthenticatedUser {
    return new AuthenticatedUser(registeredUser.id, registeredUser.email);
  }
}
