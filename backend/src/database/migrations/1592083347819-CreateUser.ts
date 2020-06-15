import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUser1592083347819 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'cpf',
            type: 'varchar',
          },
          {
            name: 'senha',
            type: 'varchar',
          },
          {
            name: 'data_nascimento',
            type: 'timestamp',
          },
          {
            name: 'autonomo',
            type: 'bool',
          },
          {
            name: 'diabete',
            type: 'bool',
          },
          {
            name: 'hipertensao',
            type: 'bool',
          },
          {
            name: 'peso',
            type: 'varchar',
          },
          {
            name: 'depressao',
            type: 'bool',
          },
          {
            name: 'medicacao',
            type: 'bool',
          },
          {
            name: 'pontos',
            type: 'smallint',
          },
          {
            name: 'truck_oleo',
            type: 'timestamp',
          },
          {
            name: 'truck_pneus',
            type: 'timestamp',
          },
          {
            name: 'truck_revisao',
            type: 'timestamp',
          },
          {
            name: 'truck_pastilhas_freio',
            type: 'timestamp',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
