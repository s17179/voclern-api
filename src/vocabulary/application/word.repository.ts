import { Word } from '../domain/word';

export interface WordRepository {
  create(word: Word);
}
