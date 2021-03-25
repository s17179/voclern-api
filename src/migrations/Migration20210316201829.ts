import { Migration } from '@mikro-orm/migrations';

export class Migration20210316201829 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "vocabulary"."word_groups" ("id" uuid not null, "numeric_id" serial not null, "creator_id" uuid not null, "name" varchar(255) not null);',
    );

    this.addSql(
      'alter table "vocabulary"."word_groups" add constraint "word_groups_pkey" primary key ("id", "numeric_id");',
    );

    this.addSql(
      'alter table "vocabulary"."word_groups" add constraint "word_groups_id_unique" unique ("id");',
    );

    this.addSql(
      'alter table "vocabulary"."word_groups" add constraint "word_groups_numeric_id_unique" unique ("numeric_id");',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table "vocabulary"."word_groups"');
  }
}
