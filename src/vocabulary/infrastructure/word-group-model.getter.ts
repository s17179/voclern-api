import { WordGroup } from '../domain/word-group';
import { WordGroupId } from '../domain/word-group-id';
import { UserId } from '../../shared/domain/user-id';

export class WordGroupModelGetter extends WordGroup {
  static fromWordGroup(wordGroup: WordGroup): WordGroupModelGetter {
    const id: WordGroupId = Reflect.get(wordGroup, '_id');
    const creatorId: UserId = Reflect.get(wordGroup, '_creatorId');
    const name: string = Reflect.get(wordGroup, '_name');

    return new WordGroupModelGetter(id, creatorId, name);
  }

  get id(): WordGroupId {
    return this._id;
  }

  get creatorId(): UserId {
    return this._creatorId;
  }

  get name(): string {
    return this._name;
  }
}
