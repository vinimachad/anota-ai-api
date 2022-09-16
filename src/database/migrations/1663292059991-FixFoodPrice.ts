import { MigrationInterface, QueryRunner } from "typeorm";

export class FixFoodPrice1663292059991 implements MigrationInterface {
    name = 'FixFoodPrice1663292059991'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "foods" ALTER COLUMN "type" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "foods" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "foods" ADD "price" numeric(5,2) NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "foods" ALTER COLUMN "preview_url" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "foods" ALTER COLUMN "description" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "foods" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "foods" ALTER COLUMN "preview_url" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "foods" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "foods" ADD "price" integer`);
        await queryRunner.query(`ALTER TABLE "foods" ALTER COLUMN "type" DROP NOT NULL`);
    }

}
