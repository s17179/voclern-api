import { WordGroup } from '../domain/word-group';

export interface WordGroupRepository {
  create(wordGroup: WordGroup);
}
