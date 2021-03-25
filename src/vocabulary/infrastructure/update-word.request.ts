import { IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateWordRequest {
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  value: string;

  @IsString()
  @MinLength(1)
  @MaxLength(255)
  translation: string;
}
