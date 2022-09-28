import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDetail1664326245277 implements MigrationInterface {
    name = 'CreateDetail1664326245277'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "details" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "results" json array NOT NULL, "restaurant_id" uuid, CONSTRAINT "REL_18f81b03f55895c97c2166a4f5" UNIQUE ("restaurant_id"), CONSTRAINT "PK_02185da47c073158a934d3927dd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD "description" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD "detail_id" uuid`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD CONSTRAINT "UQ_c9942af3e36414ea9d242e1ae7d" UNIQUE ("detail_id")`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD "avaliations_id" character varying`);
        await queryRunner.query(`ALTER TABLE "details" ADD CONSTRAINT "FK_18f81b03f55895c97c2166a4f5f" FOREIGN KEY ("restaurant_id") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD CONSTRAINT "FK_c9942af3e36414ea9d242e1ae7d" FOREIGN KEY ("detail_id") REFERENCES "details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant" DROP CONSTRAINT "FK_c9942af3e36414ea9d242e1ae7d"`);
        await queryRunner.query(`ALTER TABLE "details" DROP CONSTRAINT "FK_18f81b03f55895c97c2166a4f5f"`);
        await queryRunner.query(`ALTER TABLE "restaurant" DROP COLUMN "avaliations_id"`);
        await queryRunner.query(`ALTER TABLE "restaurant" DROP CONSTRAINT "UQ_c9942af3e36414ea9d242e1ae7d"`);
        await queryRunner.query(`ALTER TABLE "restaurant" DROP COLUMN "detail_id"`);
        await queryRunner.query(`ALTER TABLE "restaurant" DROP COLUMN "description"`);
        await queryRunner.query(`DROP TABLE "details"`);
    }

}
