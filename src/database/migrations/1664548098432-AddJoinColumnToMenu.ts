import {MigrationInterface, QueryRunner} from "typeorm";

export class AddJoinColumnToMenu1664548098432 implements MigrationInterface {
    name = 'AddJoinColumnToMenu1664548098432'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant" DROP CONSTRAINT "FK_d8dc3269a0929364fae6a6b73b9"`);
        await queryRunner.query(`ALTER TABLE "restaurant" DROP CONSTRAINT "UQ_d8dc3269a0929364fae6a6b73b9"`);
        await queryRunner.query(`ALTER TABLE "restaurant" DROP COLUMN "menuId"`);
        await queryRunner.query(`ALTER TABLE "menus" ADD "restaurantId" uuid`);
        await queryRunner.query(`ALTER TABLE "menus" ADD CONSTRAINT "UQ_62f6422b138b02c889426a1bf47" UNIQUE ("restaurantId")`);
        await queryRunner.query(`ALTER TABLE "menus" ADD CONSTRAINT "FK_62f6422b138b02c889426a1bf47" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "menus" DROP CONSTRAINT "FK_62f6422b138b02c889426a1bf47"`);
        await queryRunner.query(`ALTER TABLE "menus" DROP CONSTRAINT "UQ_62f6422b138b02c889426a1bf47"`);
        await queryRunner.query(`ALTER TABLE "menus" DROP COLUMN "restaurantId"`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD "menuId" uuid`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD CONSTRAINT "UQ_d8dc3269a0929364fae6a6b73b9" UNIQUE ("menuId")`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD CONSTRAINT "FK_d8dc3269a0929364fae6a6b73b9" FOREIGN KEY ("menuId") REFERENCES "menus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
