import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class users1551799014012 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: "users",
      columns: [
        {
          name: "uid",
          type: "int",
          isPrimary: true,
          isGenerated: true
        },
        {
          name: "name",
          type: "text",
          isNullable: false
        },
        {
          name: "username",
          type: "text",
          isNullable: false,
          isUnique: true
        },
        {
          name: "email",
          type: "text",
          isNullable: false,
          isUnique: true
        },
        {
          name: "password",
          type: "text",
          isNullable: false
        },
        {
          name: "profile_pic",
          type: "text",
          isNullable: false,
          default: "'profile_pics/default.png'"
        },
        {
          name: "links",
          type: "text[]",
          isNullable: false,
          default: "ARRAY[]::TEXT[]"
        },
        {
          name: "createdAt",
          type: "timestamp with time zone",
          default: "NOW()"
        }
      ]
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("users", true);
  }

}
