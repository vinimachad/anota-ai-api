import {MigrationInterface, QueryRunner} from "typeorm";

export class AddDefaultAndDecimalType1663958508965 implements MigrationInterface {
    name = 'AddDefaultAndDecimalType1663958508965'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant" DROP COLUMN "evaluation"`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD "evaluation" numeric DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant" DROP COLUMN "evaluation"`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD "evaluation" integer`);
    }

}
