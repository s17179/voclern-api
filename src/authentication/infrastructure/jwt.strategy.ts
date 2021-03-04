import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { AppConfig } from '../../infrastructure/app.config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly config: AppConfig) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, // TODO handle token expiration
      secretOrKey: config.getJwtSecret(),
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, email: payload.email };
  }
}
