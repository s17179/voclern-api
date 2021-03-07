import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { AppConfig } from '../../infrastructure/app.config';
import { AuthenticatedUser } from '../../shared/application/authenticated-user';
import { Uuid } from '../../shared/domain/uuid';
import { Email } from '../../shared/domain/email';
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
    const id = new UserId(Uuid.fromExisting(payload.sub));
    const email = Email.fromString(payload.email);

    return new AuthenticatedUser(id, email);
  }
}
