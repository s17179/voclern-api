import { Migration } from '@mikro-orm/migrations';

export class Migration20210223204353 extends Migration {
  async up(): Promise<void> {
    this.addSql('create schema "authentication";');

    this.addSql(
      'create table "authentication"."users" ("id" uuid not null, "numeric_id" serial not null, "email" varchar(255) not null, "password" varchar(255) not null);',
    );

    this.addSql(
      'alter table "authentication"."users" add constraint "users_pkey" primary key ("id", "numeric_id");',
    );

    this.addSql(
      'alter table "authentication"."users" add constraint "users_numeric_id_unique" unique ("numeric_id");',
    );

    this.addSql(
      'alter table "authentication"."users" add constraint "users_email_unique" unique ("email");',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table "authentication"."users"');

    this.addSql('drop schema "authentication"');
  }
}
