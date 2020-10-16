import { MigrationInterface, QueryRunner, Table } from "typeorm";

//    No arquivo package.json tentei colocar como dependência de dev esse 
//    "typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"

export class createOrphanages1602867050606 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    // REALIZAR ALTERAÇÕES: CRIAR TABELA, CRIAR CAMPO, DELETAR CAMPO
    await queryRunner.createTable(new Table({
      name: "orphanages",
      columns: [
        {
          name: "id",
          type: "integer",
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment",
        },
        {
          name: "name",
          type: "varchar",
        },
        {
          name: "latitude",
          type: "decimal",
          scale: 10,
          precision: 2,
        },
        {
          name: "longitude",
          type: "decimal",
          scale: 10,
          precision: 2,
        },
        {
          name: "about",
          type: "text",
        },
        {
          name: "instructions",
          type: "text",
        },
        {
          name: "open_on_weekends",
          type: "boolean",
          default: false,
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // DESFAZER O QUE FOI FEITO NO UP SEMPRE
    await queryRunner.dropTable('orphanages')

  }

}
