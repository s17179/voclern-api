import { Module } from '@nestjs/common';
import { RegistrationService } from '../application/registration.service';
import { RegistrationController } from './registration.controller';
import { UserEntityMapper } from './user-entity.mapper';
import {
  PasswordEncryptor,
  UserEntityRepository,
  UserMapper,
  UserRepository,
} from './authentication-di-container.config';
import { PassportModule } from '@nestjs/passport';
import { AuthenticationController } from './authentication.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationService } from '../application/authentication.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtTokenService } from '../application/jwt-token.service';
import { AppConfig } from '../../infrastructure/app.config';

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
    JwtModule.registerAsync({
      inject: [AppConfig],
      useFactory: (config: AppConfig) => ({
        secret: config.getJwtSecret(),
      }),
    }),
  ],
})
export class AuthenticationModule {}
