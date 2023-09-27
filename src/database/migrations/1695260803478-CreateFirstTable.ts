import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateFirstTable1695260803478 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.createTable(
        new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    generationStrategy: "increment"
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '100',
                    isNullable: false
                },
                {
                    name: 'cpf',
                    type: 'varchar',
                    length: '11',
                    isNullable: false
                },
                {
                    name: 'conta',
                    type: 'varchar',
                    length: '100',
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                },
              ],
        })
     )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
