import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { Uuid } from '../../shared/domain/uuid';
import { UuidType } from '../../infrastructure/mikro-orm/uuid.type';

@Entity({ tableName: 'vocabulary.word_groups' })
export class WordGroupEntity {
  @PrimaryKey({ name: 'id', type: UuidType })
  private readonly _id: Uuid;

  @Property({ name: 'numeric_id' })
  @Unique()
  private readonly _numericId: number;

  @Property({ name: 'creator_id', type: UuidType })
  private readonly _creatorId: Uuid;

  @Property({ name: 'name' })
  private readonly _name: string;

  constructor(id: Uuid, creatorId: Uuid, name: string) {
    this._id = id;
    this._creatorId = creatorId;
    this._name = name;
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

  get name(): string {
    return this._name;
  }
}
