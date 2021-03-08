import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { AppConfig } from '../../infrastructure/app.config';
import { AuthenticatedUser } from '../../shared/application/authenticated-user';
import { Uuid } from '../../shared/domain/uuid';
import { UserId } from '../../shared/domain/user-id';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly config: AppConfig) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, // TODO handle token expiration
      secretOrKey: config.getJwtSecret(),
    });
  }

  async validate(payload: {
    sub: string;
    email: string;
  }): Promise<AuthenticatedUser> {
    const id = new UserId(Uuid.fromExisting(payload.sub)); // TODO check if user exists

    return new AuthenticatedUser(id);
  }
}
