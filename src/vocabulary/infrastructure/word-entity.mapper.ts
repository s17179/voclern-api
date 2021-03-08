import { Word } from '../domain/word';
import { WordEntity } from './word.entity';
import { WordModelGetter } from './word-model.getter';
import { WordId } from '../domain/word-id';
import { UserId } from '../../shared/domain/user-id';

export class WordEntityMapper {
  mapToEntity(word: Word): WordEntity {
    const wordModelGetter = WordModelGetter.fromWord(word);

    return new WordEntity(
      wordModelGetter.id.id,
      wordModelGetter.creatorId.id,
      wordModelGetter.value,
      wordModelGetter.translation,
    );
  }

  mapToModel(wordEntity: WordEntity): Word {
    return new WordModelGetter(
      new WordId(wordEntity.id),
      new UserId(wordEntity.creatorId),
      wordEntity.value,
      wordEntity.translation,
    );
  }
}
