import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCoordinatorIDInAddress1660677685598 implements MigrationInterface {
    name = 'CreateCoordinatorIDInAddress1660677685598'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" ADD "coordinateId" uuid`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "UQ_46f5533fbe9418bd2f76305dd14" UNIQUE ("coordinateId")`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_46f5533fbe9418bd2f76305dd14" FOREIGN KEY ("coordinateId") REFERENCES "coordinates"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_46f5533fbe9418bd2f76305dd14"`);
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "UQ_46f5533fbe9418bd2f76305dd14"`);
        await queryRunner.query(`ALTER TABLE "adresses" DROP COLUMN "coordinateId"`);
    }

}
