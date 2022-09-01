import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSomePropertiesToRestaurant1662049989546 implements MigrationInterface {
    name = 'AddSomePropertiesToRestaurant1662049989546'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant" ADD "avatar_url" character varying`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD "type" character varying`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD "price" integer`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "restaurant" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "restaurant" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "restaurant" DROP COLUMN "avatar_url"`);
    }

}
