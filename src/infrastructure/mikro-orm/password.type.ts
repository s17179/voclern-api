import { Type, ValidationError } from '@mikro-orm/core';
import { Password } from '../../authentication/domain/password';

export class PasswordType extends Type<Password, string> {
  convertToDatabaseValue(value: Password | string | undefined): string {
    if (value instanceof Password) {
      return value.toString();
    }

    if (value !== undefined) {
      return value;
    }

    throw ValidationError.invalidType(PasswordType, value, 'JS');
  }

  convertToJSValue(value: Password | string | undefined): Password {
    if (value instanceof Password) {
      return value;
    }

    if (value !== undefined) {
      return Password.fromExisting(value);
    }

    throw ValidationError.invalidType(PasswordType, value, 'database');
  }

  getColumnType() {
    return `varchar(255)`;
  }
}
