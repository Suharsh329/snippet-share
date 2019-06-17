import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class snippets1560692589964 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: "snippets",
      columns: [
        {
          name: "sid",
          type: "int",
          isPrimary: true,
          isGenerated: true
        },
        {
          name: "title",
          type: "text",
          isNullable: false
        },
        {
          name: "code",
          type: "text",
          isNullable: false,
        },
        {
          name: "language",
          type: "text",
          isNullable: false,
        },
        {
          name: "uid",
          type: "int"
        },
        {
          name: "createdAt",
          type: "timestamp with time zone",
          default: "NOW()"
        }
      ]
    }), true);

    await queryRunner.createForeignKey("snippets", new TableForeignKey({
      columnNames: ['uid'],
      referencedColumnNames: ['uid'],
      referencedTableName: 'users',
      onDelete: "SET NULL",
      onUpdate: "CASCADE"
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    //await queryRunner.dropForeignKey()
    await queryRunner.dropTable("snippets", true);
  }

}
