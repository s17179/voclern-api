import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { RegisteredUser } from './registered-user';
import { RegistrationContract } from './registration.contract';
import { Transaction } from '../../shared/application/transaction';
import { Uuid } from '../../shared/domain/uuid';
import { Email } from '../../shared/domain/email';
import { Password } from '../domain/password';
import { PasswordEncryptor } from '../domain/password.encryptor';

@Injectable()
export class RegistrationService {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
    @Inject('Transaction') private readonly transaction: Transaction,
    @Inject('PasswordEncryptor')
    private readonly passwordEncryptor: PasswordEncryptor,
  ) {}

  async register(contract: RegistrationContract): Promise<void> {
    const id = Uuid.fromExisting(contract.id);

    const email = Email.fromString(contract.email); // TODO check if unique

    const password = await Password.encrypt(
      contract.password,
      this.passwordEncryptor,
    );

    const registeredUser = new RegisteredUser(id, email, password);

    // TODO use transactional instead
    await this.transaction.begin();

    try {
      await this.userRepository.register(registeredUser);

      await this.transaction.commit();
    } catch (e) {
      await this.transaction.rollback();
      throw e;
    }
  }
}
