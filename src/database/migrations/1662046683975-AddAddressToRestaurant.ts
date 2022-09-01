import {MigrationInterface, QueryRunner} from "typeorm";

export class AddAddressToRestaurant1662046683975 implements MigrationInterface {
    name = 'AddAddressToRestaurant1662046683975'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_cb23313a95baed6cd236a4906e9"`);
        await queryRunner.query(`ALTER TABLE "adresses" RENAME COLUMN "addressId" TO "restaurantId"`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_229d1de94e1c771010ca0384a0d" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_229d1de94e1c771010ca0384a0d"`);
        await queryRunner.query(`ALTER TABLE "adresses" RENAME COLUMN "restaurantId" TO "addressId"`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_cb23313a95baed6cd236a4906e9" FOREIGN KEY ("addressId") REFERENCES "adresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
