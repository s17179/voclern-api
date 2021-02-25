import { Transaction } from '../application/transaction';
import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';

@Injectable()
export class MikroOrmTransaction implements Transaction {
  constructor(private readonly entityManager: EntityManager) {}

  begin(): Promise<void> {
    return this.entityManager.begin();
  }

  commit(): Promise<void> {
    return this.entityManager.commit();
  }

  rollback(): Promise<void> {
    return this.entityManager.rollback();
  }
}
