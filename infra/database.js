import pg from "pg";

export default async function query(queryObject) {
  const { Client } = pg;
  const client = new Client({
    user: "local_user",
    password: "local_password",
    host: "localhost",
    port: 5432,
    database: "local_db",
  });
  await client.connect();

  const response = await client.query(queryObject);
  await client.end();

  return response;
}
