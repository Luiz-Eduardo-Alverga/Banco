import { table } from "console"
import { MigrationInterface, QueryRunner , Table} from "typeorm"

export class CreateAccountTable1695488210295 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'account',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              generationStrategy: 'increment'
            },
            {
              name: 'FKIdUser',
              type: 'int',
              isNullable:false
            },
            {
              name: 'saldo',
              type: 'real',
              isNullable: false,
              default: 0
            }
          ],
          foreignKeys: [
            {
              columnNames: ['FKIdUser'],
              referencedTableName: 'users',
              referencedColumnNames: ['id'],
              onDelete: 'SET NULL'
            }

          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('account')
    }

}
