import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { AuthenticateQuery } from '../application/authenticate.query';

export class LoginRequest implements AuthenticateQuery {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  password: string;
}
