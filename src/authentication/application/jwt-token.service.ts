import { AuthenticatedUser } from './authenticated-user';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { Token } from './token';

@Injectable()
export class JwtTokenService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(user: AuthenticatedUser): Token {
    const payload = { sub: user.id, email: user.email };

    return new Token(this.jwtService.sign(payload));
  }
}
