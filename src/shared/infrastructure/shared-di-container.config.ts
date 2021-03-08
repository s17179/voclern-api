import { MikroOrmTransaction } from './mikro-orm.transaction';
import { NestCommandBus } from './nest-command-bus';

export const Transaction = {
  provide: 'Transaction',
  useClass: MikroOrmTransaction,
};

export const ICommandBus = {
  provide: 'ICommandBus',
  useClass: NestCommandBus,
};
