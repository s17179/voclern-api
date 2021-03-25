import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { Uuid } from '../../shared/domain/uuid';
import { UuidType } from '../../infrastructure/mikro-orm/uuid.type';

@Entity({ tableName: 'vocabulary.words' })
export class WordEntity {
  @PrimaryKey({ name: 'id', type: UuidType })
  private readonly _id: Uuid;

  @Property({ name: 'numeric_id' })
  @Unique()
  private readonly _numericId: number;

  @Property({ name: 'creator_id', type: UuidType })
  private readonly _creatorId: Uuid;

  @Property({ name: 'value' })
  private _value: string;

  @Property({ name: 'translation' })
  private _translation: string;

  constructor(id: Uuid, creatorId: Uuid, value: string, translation: string) {
    this._id = id;
    this._creatorId = creatorId;
    this._value = value;
    this._translation = translation;
  }

  get id(): Uuid {
    return this._id;
  }

  get numericId(): number {
    return this._numericId;
  }

  get creatorId(): Uuid {
    return this._creatorId;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  get translation(): string {
    return this._translation;
  }

  set translation(value: string) {
    this._translation = value;
  }
}
