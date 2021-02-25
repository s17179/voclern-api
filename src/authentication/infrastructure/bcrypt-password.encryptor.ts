import * as bcrypt from 'bcrypt';
import { PasswordEncryptor } from '../domain/password.encryptor';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BcryptPasswordEncryptor implements PasswordEncryptor {
  async encrypt(password: string): Promise<string> {
    return await bcrypt.hash(password.toString(), 10);
  }

  async compare(password: string, encryptedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, encryptedPassword);
  }
}
