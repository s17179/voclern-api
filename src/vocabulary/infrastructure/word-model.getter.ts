import { Word } from '../domain/word';
import { WordId } from '../domain/word-id';
import { UserId } from '../../shared/domain/user-id';
import { WordGroupId } from '../domain/word-group-id';

export class WordModelGetter extends Word {
  static fromWord(word: Word): WordModelGetter {
    const id: WordId = Reflect.get(word, '_id');
    const creatorId: UserId = Reflect.get(word, '_creatorId');
    const value: string = Reflect.get(word, '_value');
    const translation: string = Reflect.get(word, '_translation');
    const wordGroupId: WordGroupId = Reflect.get(word, '_wordGroupId');

    return new WordModelGetter(id, creatorId, value, translation, wordGroupId);
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

  set value(value: string) {
    this._value = value;
  }

  get translation(): string {
    return this._translation;
  }

  set translation(value: string) {
    this._translation = value;
  }

  get wordGroupId(): WordGroupId {
    return this._wordGroupId;
  }
}
