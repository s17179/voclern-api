import { MikroOrmTransaction } from './mikro-orm.transaction';

export const Transaction = {
  provide: 'Transaction',
  useClass: MikroOrmTransaction,
};
