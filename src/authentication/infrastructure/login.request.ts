import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { AuthenticateContract } from '../application/authenticate.contract';

export class LoginRequest implements AuthenticateContract {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  password: string;
}
