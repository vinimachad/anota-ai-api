import {MigrationInterface, QueryRunner} from "typeorm";

export class AddLatAndLongInAddress1663873037143 implements MigrationInterface {
    name = 'AddLatAndLongInAddress1663873037143'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" ADD "lat" character varying`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD "long" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP COLUMN "long"`);
        await queryRunner.query(`ALTER TABLE "adresses" DROP COLUMN "lat"`);
    }

}
