import db from ".";
import { users } from "./schema";

async function main() {
  await db.delete(users);
  const user: typeof users.$inferInsert = {
    name: "Amine Anbari",
    email: "amine@gmail.com",
    password: "123456",
  };
  try {
    await db.insert(users).values(user);
    console.log("New user created!");

    const usersList = await db.select().from(users);

    console.log("------t_users------");

    usersList.forEach((user) => {
      console.table(user);
    });
  } catch (error) {
    console.error(error);
  } finally {
    process.exit();
  }
}

main();
