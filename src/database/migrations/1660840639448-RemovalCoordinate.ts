import {MigrationInterface, QueryRunner} from "typeorm";

export class RemovalCoordinate1660840639448 implements MigrationInterface {
    name = 'RemovalCoordinate1660840639448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_46f5533fbe9418bd2f76305dd14"`);
        await queryRunner.query(`ALTER TABLE "adresses" RENAME COLUMN "coordinateId" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "adresses" RENAME CONSTRAINT "UQ_46f5533fbe9418bd2f76305dd14" TO "UQ_b4f5c94493f23641866f161e212"`);
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "UQ_b4f5c94493f23641866f161e212"`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_b4f5c94493f23641866f161e212" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_b4f5c94493f23641866f161e212"`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "UQ_b4f5c94493f23641866f161e212" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "adresses" RENAME CONSTRAINT "UQ_b4f5c94493f23641866f161e212" TO "UQ_46f5533fbe9418bd2f76305dd14"`);
        await queryRunner.query(`ALTER TABLE "adresses" RENAME COLUMN "userId" TO "coordinateId"`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_46f5533fbe9418bd2f76305dd14" FOREIGN KEY ("coordinateId") REFERENCES "coordinates"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
