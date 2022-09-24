import {MigrationInterface, QueryRunner} from "typeorm";

export class FixDecimal1663959380427 implements MigrationInterface {
    name = 'FixDecimal1663959380427'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "evaluation" TYPE numeric(5,2)`);
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "evaluation" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "evaluation" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "evaluation" TYPE numeric`);
    }

}
