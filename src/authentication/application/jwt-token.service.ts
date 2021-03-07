import { AuthenticatedUser } from '../../shared/application/authenticated-user';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { Token } from './token';

@Injectable()
export class JwtTokenService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(user: AuthenticatedUser): Token {
    const payload = { sub: user.id.toString(), email: user.email.toString() };

    return new Token(this.jwtService.sign(payload));
  }
}
