import {MigrationInterface, QueryRunner} from "typeorm";

export class Food1662051433291 implements MigrationInterface {
    name = 'Food1662051433291'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "foods" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "restaurantId" uuid, CONSTRAINT "PK_0cc83421325632f61fa27a52b59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "avatar_url" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "type" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "price" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "foods" ADD CONSTRAINT "FK_0250659f9284b4ce80744075112" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "foods" DROP CONSTRAINT "FK_0250659f9284b4ce80744075112"`);
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "price" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "type" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "avatar_url" DROP NOT NULL`);
        await queryRunner.query(`DROP TABLE "foods"`);
    }

}
