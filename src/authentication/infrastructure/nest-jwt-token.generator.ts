import { JwtTokenGenerator } from '../application/jwt-token.generator';
import { Token } from '../application/token';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenData } from '../application/token-data';

@Injectable()
export class NestJwtTokenGenerator implements JwtTokenGenerator {
  constructor(private readonly jwtService: JwtService) {}

  async generate(payload: TokenData): Promise<Token> {
    return new Token(await this.jwtService.signAsync(payload));
  }
}
