import {MigrationInterface, QueryRunner} from "typeorm";

export class AddNullableToPoints1663950641510 implements MigrationInterface {
    name = 'AddNullableToPoints1663950641510'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avaliation" ALTER COLUMN "points" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avaliation" ALTER COLUMN "points" SET NOT NULL`);
    }

}
