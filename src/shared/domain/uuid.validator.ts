import { validate as uuidValidate } from 'uuid';
import { InvalidUuidException } from './invalid-uuid.exception';

export class UuidValidator {
  static validate(uuid: string): void {
    if (!uuidValidate(uuid)) {
      throw new InvalidUuidException(uuid);
    }
  }
}
