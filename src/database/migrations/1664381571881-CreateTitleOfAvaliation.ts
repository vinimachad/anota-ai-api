import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTitleOfAvaliation1664381571881 implements MigrationInterface {
    name = 'CreateTitleOfAvaliation1664381571881'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avaliation" ADD "title" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avaliation" DROP COLUMN "title"`);
    }

}
