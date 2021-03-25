import { DeleteWordContract } from './delete-word.contract';
import { WordId } from '../domain/word-id';
import { Uuid } from '../../shared/domain/uuid';
import { UserId } from '../../shared/domain/user-id';

export class DeleteWordCommand {
  public readonly id: WordId;

  constructor(contract: DeleteWordContract, public readonly doerId: UserId) {
    this.id = new WordId(Uuid.fromExisting(contract.id));
  }
}
