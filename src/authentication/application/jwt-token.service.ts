import { AuthenticatedUser } from '../../shared/application/authenticated-user';
import { Inject, Injectable } from '@nestjs/common';
import { Token } from './token';
import { JwtTokenGenerator } from './jwt-token.generator';

@Injectable()
export class JwtTokenService {
  constructor(
    @Inject('JwtTokenGenerator')
    private readonly jwtTokenGenerator: JwtTokenGenerator,
  ) {}

  async generateToken(user: AuthenticatedUser): Promise<Token> {
    const payload = { sub: user.id.toString() };

    return this.jwtTokenGenerator.generate(payload);
  }
}
