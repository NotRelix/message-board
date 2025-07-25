#! /usr/bin/env node
require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message VARCHAR ( 255 ),
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, message)
VALUES
  ('Bryan', 'Omg hello im first'),
  ('Test', 'Second place baby'),
  ('Nuts', 'Deez nuts');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
