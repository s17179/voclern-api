import { Type, ValidationError } from '@mikro-orm/core';
import { Uuid } from '../../shared/domain/uuid';

export class UuidType extends Type<Uuid, string> {
  convertToDatabaseValue(value: Uuid | string | undefined): string {
    if (value instanceof Uuid) {
      return value.toString();
    }

    if (value !== undefined) {
      return value;
    }

    throw ValidationError.invalidType(UuidType, value, 'JS');
  }

  convertToJSValue(value: Uuid | string | undefined): Uuid {
    if (value instanceof Uuid) {
      return value;
    }

    if (value !== undefined) {
      return Uuid.fromExisting(value);
    }

    throw ValidationError.invalidType(UuidType, value, 'database');
  }

  getColumnType() {
    return 'uuid';
  }
}
