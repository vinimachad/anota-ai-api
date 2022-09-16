import {MigrationInterface, QueryRunner} from "typeorm";

export class RestaurantKind1663334652530 implements MigrationInterface {
    name = 'RestaurantKind1663334652530'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "restaurant_kind" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, CONSTRAINT "PK_24c19f7843a6a80af835e399d51" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "restaurant_kind"`);
    }

}
