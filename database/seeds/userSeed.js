import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { usersTable } from '../schema/schema.js';


const db = drizzle(process.env.DATABASE_URL);
const seedUsers = async () => {
    const users = [
        {
          name: "Alice Wonderland",
          password: "hashedPassword1",
          email: "alice@example.com",
          isActive: true,
          role: "user",
        },
        {
          name: "Bob The Builder",
          password: "hashedPassword2",
          email: "bob@example.com",
          isActive: true,
          role: "admin",
        },
        {
          name: "Charlie Chaplin",
          password: "hashedPassword3",
          email: "charlie@example.net",
          isActive: true,
          role: "user",
        },
        {
          name: "Diana Prince",
          password: "hashedPassword4",
          email: "diana@example.org",
          isActive: true,
          role: "user",
        },
        {
          name: "Ethan Hunt",
          password: "hashedPassword5",
          email: "ethan@example.io",
          isActive: false,
          role: "user",
        },
        {
          name: "Fiona Goode",
          password: "hashedPassword6",
          email: "fiona@example.co.uk",
          isActive: true,
          role: "admin",
        },
        {
          name: "George Jetson",
          password: "hashedPassword7",
          email: "george@example.ca",
          isActive: true,
          role: "user",
        },
        {
          name: "Hermione Granger",
          password: "hashedPassword8",
          email: "hermione@example.biz",
          isActive: true,
          role: "user",
        },
        {
          name: "Indiana Jones",
          password: "hashedPassword9",
          email: "indiana@example.info",
          isActive: false,
          role: "user",
        },
        {
          name: "Juliet Capulet",
          password: "hashedPassword10",
          email: "juliet@example.tv",
          isActive: true,
          role: "user",
        },
      ];

      await db.insert(usersTable).values(users);
      console.log('New user created!');

}


seedUsers();