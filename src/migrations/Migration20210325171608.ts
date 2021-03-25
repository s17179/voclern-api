import { Migration } from '@mikro-orm/migrations';

export class Migration20210325171608 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'alter table "vocabulary"."words" add column "word_group_id" uuid not null;',
    );

    this.addSql(
      'alter table "vocabulary"."words" add constraint "words_word_group_id_foreign" foreign key ("word_group_id") references "vocabulary"."word_groups" ("id");',
    );
  }
}
