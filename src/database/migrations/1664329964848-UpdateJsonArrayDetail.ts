import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateJsonArrayDetail1664329964848 implements MigrationInterface {
    name = 'UpdateJsonArrayDetail1664329964848'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant" DROP CONSTRAINT "FK_ec20f12b516e74ede765ec8fa9a"`);
        await queryRunner.query(`ALTER TABLE "restaurant" RENAME COLUMN "detailId" TO "details"`);
        await queryRunner.query(`ALTER TABLE "restaurant" RENAME CONSTRAINT "UQ_ec20f12b516e74ede765ec8fa9a" TO "UQ_84c395fe46c70a86deb05b2b932"`);
        await queryRunner.query(`ALTER TABLE "restaurant" DROP CONSTRAINT "UQ_84c395fe46c70a86deb05b2b932"`);
        await queryRunner.query(`ALTER TABLE "restaurant" DROP COLUMN "details"`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD "details" jsonb NOT NULL DEFAULT '[]'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant" DROP COLUMN "details"`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD "details" uuid`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD CONSTRAINT "UQ_84c395fe46c70a86deb05b2b932" UNIQUE ("details")`);
        await queryRunner.query(`ALTER TABLE "restaurant" RENAME CONSTRAINT "UQ_84c395fe46c70a86deb05b2b932" TO "UQ_ec20f12b516e74ede765ec8fa9a"`);
        await queryRunner.query(`ALTER TABLE "restaurant" RENAME COLUMN "details" TO "detailId"`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD CONSTRAINT "FK_ec20f12b516e74ede765ec8fa9a" FOREIGN KEY ("detailId") REFERENCES "details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
