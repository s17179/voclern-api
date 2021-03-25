import { WordRepository } from '../application/word.repository';
import { Word } from '../domain/word';
import { WordEntityMapper } from './word-entity.mapper';
import { MikroOrmPostgresqlWordEntityRepository } from './mikro-orm-postgresql-word-entity.repository';
import { Injectable } from '@nestjs/common';
import { WordId } from '../domain/word-id';
import { WordModelGetter } from './word-model.getter';

@Injectable()
export class MikroOrmWordRepositoryGateway implements WordRepository {
  constructor(
    private readonly wordEntityMapper: WordEntityMapper,
    private readonly wordEntityRepository: MikroOrmPostgresqlWordEntityRepository,
  ) {}

  create(word: Word): void {
    const wordEntity = this.wordEntityMapper.mapToEntity(word);

    this.wordEntityRepository.add(wordEntity);
  }

  async get(wordId: WordId): Promise<Word> {
    const wordEntity = await this.wordEntityRepository.findOneOrFail({
      id: wordId,
    });

    return this.wordEntityMapper.mapToModel(wordEntity);
  }

  async update(word: Word): Promise<void> {
    const wordEntity = await this.wordEntityRepository.findOneOrFail({
      id: word.id,
    });

    const wordModelGetter = WordModelGetter.fromWord(word);

    wordEntity.value = wordModelGetter.value;
    wordEntity.translation = wordModelGetter.translation;
  }
}
