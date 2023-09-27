import { table } from "console"
import { Column, MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm"

export class ChangeCollumNameFromTableAccount1695594933410 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.renameColumn(
        'account',
        'FKIdUser',
        'user_id'
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.renameColumn(
        'account',
        'user_id',
        'FKIdUser'
      )
    }

}
