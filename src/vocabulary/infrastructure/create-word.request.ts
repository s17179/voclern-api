import { IsString, IsUUID, MaxLength, MinLength } from 'class-validator';
import { CreateWordContract } from '../application/create-word.contract';

export class CreateWordRequest implements CreateWordContract {
  @IsUUID()
  id: string;

  @IsString()
  @MinLength(1)
  @MaxLength(255)
  value: string;

  @IsString()
  @MinLength(1)
  @MaxLength(255)
  translation: string;
}
