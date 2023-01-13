const { Pool } = require("node-postgres");

// CONFIG
const db = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  max: 20,
});

module.exports = {
  db,
};

// TABLE QUERIES
const CREATE_TABLE_SQL = `
  CREATE TABLE users (
    id varchar(36) NOT NULL,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    created_at date NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT users_id_pk PRIMARY KEY (id)
  );

  CREATE TABLE addresses (
    id varchar(36) NOT NULL,
    street varchar(100) NOT NULL,
    number integer NOT NULL,
    city varchar(50) NOT NULL,
    state varchar(50) NOT NULL,
    cep varchar(10) NOT NULL,
    user_id varchar(255) NOT NULL,
    created_at date NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT addresses_id_pk PRIMARY KEY (id),
    CONSTRAINT addresses_users_fkey FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
  );

  CREATE INDEX users_id_idx ON users USING btree (id);
  CREATE INDEX addresses_id_idx ON addresses USING btree (id);
  CREATE UNIQUE INDEX users_email_unique ON users("email");
`;

const DROP_TABLE_SQL = `
  DROP TABLE users, addresses
`;

const createTable = async () => {
  try {
    await db.query(CREATE_TABLE_SQL);
    console.log("Table created with success!!!");
  } catch (error) {
    console.error(error.stack);
  } finally {
    await db.end();
  }
};

const dropTable = async () => {
  try {
    await db.query(DROP_TABLE_SQL);
    console.log("Table deleted with success!!!");
  } catch (error) {
    console.error(error.stack);
  } finally {
    await db.end();
  }
};
