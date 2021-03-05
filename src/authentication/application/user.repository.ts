import { User } from '../domain/user';
import { Email } from '../../shared/domain/email';

export interface UserRepository {
  register(user: User): void;
  getByEmail(email: Email): Promise<User>;
}
