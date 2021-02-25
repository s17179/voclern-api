import { Inject, Injectable } from '@nestjs/common';
import { AuthenticatedUser } from './authenticated-user';
import { AuthenticationFailedException } from './authentication-failed.exception';
import { Email } from '../../shared/domain/email';
import { UserRepository } from './user.repository';
import { PasswordEncryptor } from '../domain/password.encryptor';
import { RegisteredUser } from './registered-user';
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
    private readonly mapper: UserMapper,
  ) {}

  async authenticate(
    contract: AuthenticateContract,
  ): Promise<AuthenticatedUser> {
    try {
      const registeredUser = await this.getRegisteredUserByEmail(
        contract.email,
      );

      const passwordMatches = await this.checkIfGivenPasswordMatchesRegisteredUserPassword(
        contract.password,
        registeredUser.password,
      );

      if (passwordMatches) {
        return this.getAuthenticatedUser(registeredUser);
      }
    } catch (e) {
      if (e instanceof EntityNotFoundException) {
        throw new AuthenticationFailedException();
      } else {
        throw e;
      }
    }

    throw new AuthenticationFailedException();
  }

  private getAuthenticatedUser(
    registeredUser: RegisteredUser,
  ): AuthenticatedUser {
    return this.mapper.mapToAuthenticatedUser(registeredUser);
  }

  private async getRegisteredUserByEmail(
    email: string,
  ): Promise<RegisteredUser> {
    return await this.userRepository.getByEmail(Email.fromString(email));
  }

  private async checkIfGivenPasswordMatchesRegisteredUserPassword(
    password: string,
    userPassword: Password,
  ): Promise<boolean> {
    return await userPassword.compare(password, this.passwordEncryptor);
  }
}
