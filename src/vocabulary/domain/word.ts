import { UserId } from '../../shared/domain/user-id';

export class Word {
  constructor(private readonly creatorId: UserId) {}
}
