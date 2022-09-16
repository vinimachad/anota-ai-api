import { MigrationInterface, QueryRunner } from "typeorm";

export class FoodProperties1662053618767 implements MigrationInterface {
    name = 'FoodProperties1662053618767'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "foods" ADD "type" character varying`);
        await queryRunner.query(`ALTER TABLE "foods" ADD "price" character`);
        await queryRunner.query(`ALTER TABLE "foods" ADD "preview_url" character varying`);
        await queryRunner.query(`ALTER TABLE "foods" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "foods" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "foods" DROP COLUMN "preview_url"`);
        await queryRunner.query(`ALTER TABLE "foods" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "foods" DROP COLUMN "type"`);
    }

}
