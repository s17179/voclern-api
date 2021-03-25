import { Word } from '../domain/word';
import { WordId } from '../domain/word-id';

export interface WordRepository {
  create(word: Word): void;

  get(wordId: WordId): Promise<Word>;

  update(word: Word): Promise<void>;
}
