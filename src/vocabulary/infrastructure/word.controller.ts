import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../shared/infrastructure/jwt-auth.guard';
import { VocabularyFacade } from '../application/vocabulary.facade';
import { CreateWordRequest } from './create-word.request';
import { AuthenticatedUser } from '../../shared/application/authenticated-user';
import { UpdateWordRequest } from './update-word.request';

@Controller('word')
@UseGuards(JwtAuthGuard)
export class WordController {
  constructor(private readonly vocabularyFacade: VocabularyFacade) {}

  @Post()
  async create(
    @Request() request,
    @Body() body: CreateWordRequest,
  ): Promise<void> {
    const authenticatedUser: AuthenticatedUser = request.user;

    await this.vocabularyFacade.createWord(body, authenticatedUser.id);
  }

  @Put(':id')
  async update(
    @Request() request,
    @Param('id') wordId: string,
    @Body() body: UpdateWordRequest,
  ): Promise<void> {
    const authenticatedUser: AuthenticatedUser = request.user;

    await this.vocabularyFacade.updateWord(
      {
        id: wordId,
        value: body.value,
        translation: body.translation,
      },
      authenticatedUser.id,
    );
  }
}
