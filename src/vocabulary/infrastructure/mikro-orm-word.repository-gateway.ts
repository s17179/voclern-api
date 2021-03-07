import { WordRepository } from '../application/word.repository';
import { Word } from '../domain/word';

export class MikroOrmWordRepositoryGateway implements WordRepository {
  create(word: Word) {}
}
