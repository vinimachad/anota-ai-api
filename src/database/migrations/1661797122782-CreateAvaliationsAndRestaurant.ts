import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAvaliationsAndRestaurant1661797122782 implements MigrationInterface {
    name = 'CreateAvaliationsAndRestaurant1661797122782'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "avaliation" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "points" integer NOT NULL, "clientId" uuid, "restaurantId" uuid, CONSTRAINT "PK_e1aad9835adc894d8277f596b65" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "restaurant" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_649e250d8b8165cb406d99aa30f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_cb23313a95baed6cd236a4906e9" FOREIGN KEY ("addressId") REFERENCES "adresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "avaliation" ADD CONSTRAINT "FK_9ecfa004eec98fcc9ae5732bac2" FOREIGN KEY ("clientId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "avaliation" ADD CONSTRAINT "FK_5ce5c6a2c8de9f630da8e3e359d" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avaliation" DROP CONSTRAINT "FK_5ce5c6a2c8de9f630da8e3e359d"`);
        await queryRunner.query(`ALTER TABLE "avaliation" DROP CONSTRAINT "FK_9ecfa004eec98fcc9ae5732bac2"`);
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_cb23313a95baed6cd236a4906e9"`);
        await queryRunner.query(`ALTER TABLE "adresses" DROP COLUMN "addressId"`);
        await queryRunner.query(`DROP TABLE "restaurant"`);
        await queryRunner.query(`DROP TABLE "avaliation"`);
    }

}
