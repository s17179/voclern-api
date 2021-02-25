import { Type, ValidationError } from '@mikro-orm/core';
import { Email } from '../../shared/domain/email';

export class EmailType extends Type<Email, string> {
  convertToDatabaseValue(value: Email | string | undefined): string {
    if (value instanceof Email) {
      return value.toString();
    }

    if (value !== undefined) {
      return value;
    }

    throw ValidationError.invalidType(EmailType, value, 'JS');
  }

  convertToJSValue(value: Email | string | undefined): Email {
    if (value instanceof Email) {
      return value;
    }

    if (value !== undefined) {
      return Email.fromString(value);
    }

    throw ValidationError.invalidType(EmailType, value, 'database');
  }

  getColumnType() {
    return `varchar(255)`;
  }
}
