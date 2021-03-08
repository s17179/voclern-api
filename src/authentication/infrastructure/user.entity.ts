import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { Uuid } from '../../shared/domain/uuid';
import { UuidType } from '../../infrastructure/mikro-orm/uuid.type';
import { Email } from '../../shared/domain/email';
import { Password } from '../domain/password';
import { EmailType } from '../../infrastructure/mikro-orm/email.type';
import { PasswordType } from '../../infrastructure/mikro-orm/password.type';

@Entity({ tableName: 'authentication.users' })
export class UserEntity {
  @PrimaryKey({ name: 'id', type: UuidType })
  private readonly _id: Uuid;

  @Property({ name: 'numeric_id' })
  @Unique()
  private readonly _numericId: number;

  @Property({ name: 'email', type: EmailType })
  @Unique()
  private readonly _email: Email;

  @Property({ name: 'password', type: PasswordType })
  private readonly _password: Password;

  constructor(id: Uuid, email: Email, password: Password) {
    this._id = id;
    this._email = email;
    this._password = password;
  }

  get id(): Uuid {
    return this._id;
  }

  get email(): Email {
    return this._email;
  }

  get password(): Password {
    return this._password;
  }
}
