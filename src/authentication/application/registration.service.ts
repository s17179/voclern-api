import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from '../domain/user';
import { RegistrationContract } from './registration.contract';
import { Transaction } from '../../shared/application/transaction';
import { Uuid } from '../../shared/domain/uuid';
import { Email } from '../../shared/domain/email';
import { Password } from '../domain/password';
import { PasswordEncryptor } from '../domain/password.encryptor';
import { UserId } from '../../shared/domain/user-id';

@Injectable()
export class RegistrationService {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
    @Inject('Transaction') private readonly transaction: Transaction,
    @Inject('PasswordEncryptor')
    private readonly passwordEncryptor: PasswordEncryptor,
  ) {}

  async register(contract: RegistrationContract): Promise<void> {
    const id = new UserId(Uuid.fromExisting(contract.id));

    const email = Email.fromString(contract.email); // TODO check if unique

    const password = await Password.encrypt(
      contract.password,
      this.passwordEncryptor,
    );

    const user = User.register(id, email, password);

    // TODO use transactional instead
    await this.transaction.begin();

    try {
      await this.userRepository.register(user);

      await this.transaction.commit();
    } catch (e) {
      await this.transaction.rollback();
      throw e;
    }
  }
}
