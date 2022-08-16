import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAddress1660673655267 implements MigrationInterface {
    name = 'CreateAddress1660673655267'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street_number" character varying NOT NULL, "street" character varying NOT NULL, "district" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "country" character varying NOT NULL, "postal_code" character varying NOT NULL, "formatted_address" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2787c84f7433e390ff8961d552d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "adresses"`);
    }

}
