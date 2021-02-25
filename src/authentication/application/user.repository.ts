import { RegisteredUser } from './registered-user';
import { Email } from '../../shared/domain/email';

export interface UserRepository {
  register(registeredUser: RegisteredUser): Promise<void>;
  getByEmail(email: Email): Promise<RegisteredUser>;
}
