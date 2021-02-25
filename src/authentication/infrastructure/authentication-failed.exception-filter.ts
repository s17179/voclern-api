import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { AuthenticationFailedException } from '../application/authentication-failed.exception';
import { Response } from 'express';

@Catch(AuthenticationFailedException)
export class AuthenticationFailedExceptionFilter
  implements ExceptionFilter<AuthenticationFailedException> {
  catch(exception: AuthenticationFailedException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();

    const response = ctx.getResponse<Response>();

    const statusCode = 400;

    response.status(statusCode);

    response.json({
      statusCode: statusCode,
      message: 'Invalid credentials',
    });
  }
}
