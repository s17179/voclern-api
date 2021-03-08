import { Word } from '../domain/word';
import { WordId } from '../domain/word-id';
import { UserId } from '../../shared/domain/user-id';

export class WordModelGetter extends Word {
  static fromWord(word: Word): WordModelGetter {
    const id: WordId = Reflect.get(word, '_id');
    const creatorId: UserId = Reflect.get(word, '_creatorId');
    const value: string = Reflect.get(word, '_value');
    const translation: string = Reflect.get(word, '_translation');

    return new WordModelGetter(id, creatorId, value, translation);
  }

  get id(): WordId {
    return this._id;
  }

  get creatorId(): UserId {
    return this._creatorId;
  }

  get value(): string {
    return this._value;
  }

  get translation(): string {
    return this._translation;
  }
}
