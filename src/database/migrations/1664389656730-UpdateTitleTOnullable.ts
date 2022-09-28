import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateTitleTOnullable1664389656730 implements MigrationInterface {
    name = 'UpdateTitleTOnullable1664389656730'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avaliation" ADD "title" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avaliation" DROP COLUMN "title"`);
    }

}
