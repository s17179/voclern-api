import { CreateWordHandler } from '../application/create-word.handler';
import { MikroOrmWordRepositoryGateway } from './mikro-orm-word.repository-gateway';

export const CommandHandlers = [CreateWordHandler];

export const WordRepository = {
  provide: 'WordRepository',
  useClass: MikroOrmWordRepositoryGateway,
};
