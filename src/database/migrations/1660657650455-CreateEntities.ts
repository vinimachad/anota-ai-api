import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateEntities1660657650455 implements MigrationInterface {
    name = 'CreateEntities1660657650455'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users_tokens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "refresh_token" character varying NOT NULL, "expires_date" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_9f236389174a6ccbd746f53dca8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "last_name" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "coordinates" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "latitude" character varying NOT NULL, "longitude" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_1c59319abc3dbf9c0e3d2ed9250" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users_tokens" ADD CONSTRAINT "FK_e6885dc515299ebc5f78150e14c" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "coordinates" ADD CONSTRAINT "FK_1df5715f963508d10926cdb1725" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coordinates" DROP CONSTRAINT "FK_1df5715f963508d10926cdb1725"`);
        await queryRunner.query(`ALTER TABLE "users_tokens" DROP CONSTRAINT "FK_e6885dc515299ebc5f78150e14c"`);
        await queryRunner.query(`DROP TABLE "coordinates"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "users_tokens"`);
    }

}
