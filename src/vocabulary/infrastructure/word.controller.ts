import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../authentication/infrastructure/jwt-auth.guard';
import { WordFacade } from '../application/word.facade';
import { BaseController } from '../../shared/infrastructure/base-controller';
import { CreateWordCommand } from '../application/create-word.command';

@Controller('word')
@UseGuards(JwtAuthGuard)
export class WordController extends BaseController {
  constructor(private readonly wordFacade: WordFacade) {
    super();
  }

  @Post()
  async create(@Request() request): Promise<void> {
    const authenticatedUser = this.getAuthenticatedUser(request);

    this.wordFacade.create(new CreateWordCommand(authenticatedUser.id));
  }
}
