import { Migration } from '@mikro-orm/migrations';

export class Migration20210308151902 extends Migration {
  async up(): Promise<void> {
    this.addSql('create schema "vocabulary";');

    this.addSql(
      'create table "vocabulary"."words" ("id" uuid not null, "numeric_id" serial not null, "creator_id" uuid not null, "value" varchar(255) not null, "translation" varchar(255) not null);',
    );

    this.addSql(
      'alter table "vocabulary"."words" add constraint "words_pkey" primary key ("id", "numeric_id");',
    );

    this.addSql(
      'alter table "vocabulary"."words" add constraint "words_numeric_id_unique" unique ("numeric_id");',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table "vocabulary"."words"');

    this.addSql('drop schema "vocabulary"');
  }
}
