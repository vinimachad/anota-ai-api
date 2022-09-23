import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateEvaluationTable1663950579651 implements MigrationInterface {
    name = 'CreateEvaluationTable1663950579651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avaliation" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avaliation" DROP COLUMN "description"`);
    }

}
