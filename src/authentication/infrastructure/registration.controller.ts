import { Body, Controller, Post } from '@nestjs/common';
import { RegistrationService } from '../application/registration.service';
import { RegistrationRequest } from './registration.request';

@Controller('auth')
export class RegistrationController {
  constructor(private readonly service: RegistrationService) {}

  @Post('register')
  async register(@Body() request: RegistrationRequest): Promise<void> {
    await this.service.register(request);
  }
}
