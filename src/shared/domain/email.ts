import { EmailValidator } from './email.validator';

export class Email {
  private readonly email: string;

  private constructor(email: string) {
    this.email = email;
  }

  static fromString(email: string): Email {
    EmailValidator.validate(email);

    return new Email(email);
  }

  toString(): string {
    return this.email;
  }
}
