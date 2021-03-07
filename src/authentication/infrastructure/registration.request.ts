import {
  IsEmail,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';
import { RegistrationCommand } from '../application/registration.command';

export class RegistrationRequest implements RegistrationCommand {
  @IsUUID()
  id: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  password: string;
}
