import {
  IsEmail,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';
import { RegistrationContract } from '../application/registration.contract';

export class RegistrationRequest implements RegistrationContract {
  @IsUUID()
  id: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  password: string;
}
