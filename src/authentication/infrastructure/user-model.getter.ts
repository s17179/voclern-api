import { User } from '../domain/user';
import { Email } from '../../shared/domain/email';
import { Password } from '../domain/password';
import { UserId } from '../../shared/domain/user-id';

export class UserModelGetter extends User {
  static fromUser(user: User): UserModelGetter {
    const id: UserId = Reflect.get(user, '_id');
    const email: Email = Reflect.get(user, '_email');
    const password: Password = Reflect.get(user, '_password');

    return new UserModelGetter(id, email, password);
  }

  get id(): UserId {
    return this._id;
  }

  get email(): Email {
    return this._email;
  }

  get password(): Password {
    return this._password;
  }
}
