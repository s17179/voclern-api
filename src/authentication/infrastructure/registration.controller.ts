import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { RegistrationService } from '../application/registration.service';
import { RegistrationRequest } from './registration.request';
import { JwtAuthGuard } from '../../shared/infrastructure/jwt-auth.guard';

@Controller('auth')
export class RegistrationController {
  constructor(private readonly service: RegistrationService) {}

  @Post('register')
  async register(@Body() request: RegistrationRequest): Promise<void> {
    await this.service.register(request);
  }

  // TODO remove
  @Get('test-auth')
  @UseGuards(JwtAuthGuard)
  async testAuth(@Request() request) {
    return { user: request.user };
  }
}
