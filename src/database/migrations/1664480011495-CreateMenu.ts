import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateMenu1664480011495 implements MigrationInterface {
    name = 'CreateMenu1664480011495'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "foods" DROP CONSTRAINT "FK_0250659f9284b4ce80744075112"`);
        await queryRunner.query(`ALTER TABLE "foods" RENAME COLUMN "restaurantId" TO "menuId"`);
        await queryRunner.query(`CREATE TABLE "menus" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_3fec3d93327f4538e0cbd4349c4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD "menuId" uuid`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD CONSTRAINT "UQ_d8dc3269a0929364fae6a6b73b9" UNIQUE ("menuId")`);
        await queryRunner.query(`ALTER TABLE "foods" ADD CONSTRAINT "FK_34ade2e30660a3163d143c57bd8" FOREIGN KEY ("menuId") REFERENCES "menus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD CONSTRAINT "FK_d8dc3269a0929364fae6a6b73b9" FOREIGN KEY ("menuId") REFERENCES "menus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant" DROP CONSTRAINT "FK_d8dc3269a0929364fae6a6b73b9"`);
        await queryRunner.query(`ALTER TABLE "foods" DROP CONSTRAINT "FK_34ade2e30660a3163d143c57bd8"`);
        await queryRunner.query(`ALTER TABLE "restaurant" DROP CONSTRAINT "UQ_d8dc3269a0929364fae6a6b73b9"`);
        await queryRunner.query(`ALTER TABLE "restaurant" DROP COLUMN "menuId"`);
        await queryRunner.query(`DROP TABLE "menus"`);
        await queryRunner.query(`ALTER TABLE "foods" RENAME COLUMN "menuId" TO "restaurantId"`);
        await queryRunner.query(`ALTER TABLE "foods" ADD CONSTRAINT "FK_0250659f9284b4ce80744075112" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
