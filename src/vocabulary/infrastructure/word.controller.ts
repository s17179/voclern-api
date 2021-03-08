import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../shared/infrastructure/jwt-auth.guard';
import { WordFacade } from '../application/word.facade';
import { CreateWordRequest } from './create-word.request';
import { AuthenticatedUser } from '../../shared/application/authenticated-user';

@Controller('word')
@UseGuards(JwtAuthGuard)
export class WordController {
  constructor(private readonly wordFacade: WordFacade) {}

  @Post()
  async create(
    @Request() request,
    @Body() body: CreateWordRequest,
  ): Promise<void> {
    const authenticatedUser: AuthenticatedUser = request.user;

    await this.wordFacade.create(body, authenticatedUser.id);
  }
}
