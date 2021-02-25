import { PasswordValidator } from './password.validator';
import { PasswordEncryptor } from './password.encryptor';

export class Password {
  private readonly encryptedPassword: string;

  private constructor(encryptedPassword: string) {
    this.encryptedPassword = encryptedPassword;
  }

  static async encrypt(
    password: string,
    passwordEncryptor: PasswordEncryptor,
  ): Promise<Password> {
    PasswordValidator.validate(password);

    const encryptedPassword = await passwordEncryptor.encrypt(password);

    return new Password(encryptedPassword);
  }

  static fromExisting(encryptedPassword: string): Password {
    return new Password(encryptedPassword);
  }

  async compare(
    password: string,
    passwordEncryptor: PasswordEncryptor,
  ): Promise<boolean> {
    return await passwordEncryptor.compare(password, this.encryptedPassword);
  }

  toString(): string {
    return this.encryptedPassword;
  }
}
