import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtConfig } from './authentication-di-container.config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, // TODO false
      secretOrKey: JwtConfig.secret,
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, email: payload.email };
  }
}
