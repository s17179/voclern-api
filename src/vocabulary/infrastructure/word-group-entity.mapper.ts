import { WordGroupEntity } from './word-group.entity';
import { WordGroup } from '../domain/word-group';
import { WordGroupModelGetter } from './word-group-model.getter';
import { WordGroupId } from '../domain/word-group-id';
import { UserId } from '../../shared/domain/user-id';

export class WordGroupEntityMapper {
  mapToEntity(wordGroup: WordGroup): WordGroupEntity {
    const wordGroupModelGetter = WordGroupModelGetter.fromWordGroup(wordGroup);

    return new WordGroupEntity(
      wordGroupModelGetter.id.id,
      wordGroupModelGetter.creatorId.id,
      wordGroupModelGetter.name,
    );
  }

  mapToModel(wordGroupEntity: WordGroupEntity): WordGroup {
    return new WordGroupModelGetter(
      new WordGroupId(wordGroupEntity.id),
      new UserId(wordGroupEntity.creatorId),
      wordGroupEntity.name,
    );
  }
}
