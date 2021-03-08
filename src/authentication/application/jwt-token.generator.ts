import { Token } from './token';
import { TokenData } from './token-data';

export interface JwtTokenGenerator {
  generate(payload: TokenData): Promise<Token>;
}
