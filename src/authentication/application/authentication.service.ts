import { Inject, Injectable } from '@nestjs/common';
import { AuthenticatedUser } from './authenticated-user';
import { AuthenticationFailedException } from './authentication-failed.exception';
import { Email } from '../../shared/domain/email';
import { UserRepository } from './user.repository';
import { PasswordEncryptor } from '../domain/password.encryptor';
import { User } from '../domain/user';
import { Password } from '../domain/password';
import { AuthenticateContract } from './authenticate.contract';
import { EntityNotFoundException } from '../../shared/application/entity-not-found.exception';
import { UserMapper } from './user.mapper';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
    @Inject('PasswordEncryptor')
    private readonly passwordEncryptor: PasswordEncryptor,
    @Inject('UserMapper') private readonly mapper: UserMapper,
  ) {}

  async authenticate(
    contract: AuthenticateContract,
  ): Promise<AuthenticatedUser> {
    let user = undefined;

    try {
      user = await this.getUserByEmail(contract.email);
    } catch (e) {
      if (e instanceof EntityNotFoundException) {
        throw new AuthenticationFailedException();
      } else {
        throw e;
      }
    }

    const passwordMatches = await this.checkIfGivenPasswordMatchesUserPassword(
      contract.password,
      user.password,
    );

    if (passwordMatches) {
      return this.getAuthenticatedUser(user);
    }

    throw new AuthenticationFailedException();
  }

  private getAuthenticatedUser(user: User): AuthenticatedUser {
    return this.mapper.mapToAuthenticatedUser(user);
  }

  private async getUserByEmail(email: string): Promise<User> {
    return await this.userRepository.getByEmail(Email.fromString(email));
  }

  private async checkIfGivenPasswordMatchesUserPassword(
    password: string,
    userPassword: Password,
  ): Promise<boolean> {
    return await userPassword.compare(password, this.passwordEncryptor);
  }
}
