import { MigrationInterface, QueryRunner } from "typeorm";

export class RestaurantEvaluation1663859608260 implements MigrationInterface {
    name = 'RestaurantEvaluation1663859608260'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant" ADD "evaluation" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant" DROP COLUMN "evaluation"`);
    }

}
