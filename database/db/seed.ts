import { db } from "../index";
import { users } from "./schema";


async function main() {
	await db.insert(users).values(
		[{
			name: "John",
			age: 30,
			email: "john@example.com",
		},
			{
				name: "Jane",
				age: 25,
				email: "jane@example.com",
			},
			{
				name: "Alice",
				age: 28,
				email: "alice@example.com",
			}
		]
		
	).onConflictDoNothing();
}

main().catch((err) => {
	console.error("failed to seed", err);
});
