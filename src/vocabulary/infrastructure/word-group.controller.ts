import { Controller, UseGuards, Request, Post, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../../shared/infrastructure/jwt-auth.guard';
import { WordGroupFacade } from '../application/word-group.facade';
import { AuthenticatedUser } from '../../shared/application/authenticated-user';
import { CreateWordGroupRequest } from './create-word-group.request';

@Controller('word-group')
@UseGuards(JwtAuthGuard)
export class WordGroupController {
  constructor(private readonly wordGroupFacade: WordGroupFacade) {}

  @Post()
  async create(
    @Request() request,
    @Body() body: CreateWordGroupRequest,
  ): Promise<void> {
    const authenticatedUser: AuthenticatedUser = request.user;

    await this.wordGroupFacade.create(body, authenticatedUser.id);
  }
}
