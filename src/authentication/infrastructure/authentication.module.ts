import { Module } from '@nestjs/common';
import { RegistrationService } from '../application/registration.service';
import { RegistrationController } from './registration.controller';
import { UserEntityMapper } from './user-entity.mapper';
import {
  JwtConfig,
  PasswordEncryptor,
  UserEntityRepository,
  UserRepository,
} from './authentication-di-container.config';
import { PassportModule } from '@nestjs/passport';
import { AuthenticationController } from './authentication.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationService } from '../application/authentication.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtTokenService } from '../application/jwt-token.service';
import { UserMapper } from '../application/user.mapper';
import { SharedModule } from '../../shared/infrastructure/shared.module';

@Module({
  controllers: [RegistrationController, AuthenticationController],
  providers: [
    RegistrationService,
    UserRepository,
    UserEntityRepository,
    UserEntityMapper,
    PasswordEncryptor,
    AuthenticationService,
    JwtStrategy,
    JwtTokenService,
    UserMapper,
  ],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: JwtConfig.secret,
      // signOptions: { expiresIn: '60s' },
    }),
    SharedModule,
  ],
})
export class AuthenticationModule {}
