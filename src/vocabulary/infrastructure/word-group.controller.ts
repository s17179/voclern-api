import { Controller, UseGuards, Request, Post, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../../shared/infrastructure/jwt-auth.guard';
import { AuthenticatedUser } from '../../shared/application/authenticated-user';
import { CreateWordGroupRequest } from './create-word-group.request';
import { VocabularyFacade } from '../application/vocabulary.facade';

@Controller('word-group')
@UseGuards(JwtAuthGuard)
export class WordGroupController {
  constructor(private readonly vocabularyFacade: VocabularyFacade) {}

  @Post()
  async create(
    @Request() request,
    @Body() body: CreateWordGroupRequest,
  ): Promise<void> {
    const authenticatedUser: AuthenticatedUser = request.user;

    await this.vocabularyFacade.createWordGroup(body, authenticatedUser.id);
  }
}
