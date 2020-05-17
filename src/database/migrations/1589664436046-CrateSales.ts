import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CrateSales1589664436046 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'Sales',
				columns: [],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {}
}
