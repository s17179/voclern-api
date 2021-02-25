import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { JwtTokenService } from '../application/jwt-token.service';
import { AuthenticationService } from '../application/authentication.service';
import { LoginRequest } from './login.request';
import { Token } from '../application/token';
import { AuthenticationFailedExceptionFilter } from './authentication-failed.exception-filter';

@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly jwtTokenService: JwtTokenService,
  ) {}

  @Post('login')
  @UseFilters(AuthenticationFailedExceptionFilter)
  async login(@Body() request: LoginRequest): Promise<Token> {
    const authenticatedUser = await this.authenticationService.authenticate(
      request,
    );

    return this.jwtTokenService.generateToken(authenticatedUser);
  }
}
