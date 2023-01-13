const { db } = require("../../config/database");
const { v4: uuidv4 } = require("uuid");

class CreateUserService {
  async execute(request) {
    const { first_name, last_name, email } = request;

    const sql = `
    INSERT INTO users (id, first_name, last_name, email) 
    VALUES ('${uuidv4()}', '${first_name}', '${last_name}', '${email}')
    `;

    const client = await db.connect();
    await client.query(sql);
  }
}

module.exports = {
  CreateUserService,
};
