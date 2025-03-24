import 'dotenv/config';
import { todoTable, status } from './schema';
import { db } from './index';
import { faker } from '@faker-js/faker';

async function main() {
	const data: (typeof todoTable.$inferInsert)[] = [];

	for (let i = 0; i < 20; i++) {
		data.push({
			description: faker.lorem.sentence(),
			status: faker.helpers.arrayElement(status)
		});
	}

	console.log('Seed start');
	await db.insert(todoTable).values(data);
	console.log('Seed done');

	const todos = await db.select().from(todoTable).execute();
	console.log('Getting all todos from the database: ', todos);
}

main();
