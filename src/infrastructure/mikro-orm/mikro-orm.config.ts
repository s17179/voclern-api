import { UserEntity } from '../../authentication/infrastructure/user.entity';
import { EntityNotFoundException } from '../../shared/application/entity-not-found.exception';
import { Dictionary, IPrimaryKey } from '@mikro-orm/core';

export default {
  entities: [UserEntity], // TODO auto detection?
  dbName: process.env.DATABASE_NAME || 'voclern', // TODO resolve env variables for MikroORM CLI as well
  host: process.env.DATABASE_HOST || 'localhost',
  password: process.env.DATABASE_PASSWORD || 'qwezxcdsa123',
  type: 'postgresql',
  migrations: {
    tableName: 'mikro_orm_migrations', // name of database table with log of executed transactions
    path: './src/migrations', // path to the folder with migrations
    pattern: /^[\w-]+\d+\.ts$/, // regex pattern for the migration files
    transactional: true, // wrap each migration in a transaction
    disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
    allOrNothing: true, // wrap all migrations in master transaction
    dropTables: true, // allow to disable table dropping
    safe: false, // allow to disable table and column dropping
    emit: 'ts', // migration generation mode
  },
  findOneOrFailHandler: (
    entityName: string,
    where: Dictionary | IPrimaryKey,
  ) => {
    const whereString = JSON.stringify(where, null, 2);

    return new EntityNotFoundException(
      `${entityName} not found. Where clause: ${whereString}`,
    );
  },
  debug: true,
};
