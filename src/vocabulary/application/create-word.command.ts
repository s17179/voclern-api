import { UserId } from '../../shared/domain/user-id';

export class CreateWordCommand {
  constructor(public readonly doerId: UserId) {}
}
