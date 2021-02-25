import { v4 as uuidv4 } from 'uuid';
import { UuidValidator } from './uuid.validator';

export class Uuid {
  private constructor(private uuid: string) {}

  static fromExisting(uuid: string) {
    UuidValidator.validate(uuid);

    return new Uuid(uuid);
  }

  static random(): Uuid {
    return new Uuid(uuidv4());
  }

  toString(): string {
    return this.uuid;
  }
}
