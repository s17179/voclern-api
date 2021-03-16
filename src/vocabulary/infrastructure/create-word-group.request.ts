import { CreateWordGroupContract } from '../application/create-word-group.contract';
import { IsString, IsUUID, MaxLength, MinLength } from 'class-validator';

export class CreateWordGroupRequest implements CreateWordGroupContract {
  @IsUUID()
  id: string;

  @IsString()
  @MinLength(1)
  @MaxLength(255)
  name: string;
}
