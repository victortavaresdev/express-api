const { db } = require("../../config/database");

class UpdateUserService {
  async execute(id, request) {
    const { first_name, last_name, email } = request;
    const sql = `
    UPDATE users SET first_name='${first_name}', last_name='${last_name}', 
    email='${email}' WHERE id='${id}'`;

    const client = await db.connect();
    const user = await client.query(sql);
    if (user.rowCount === 0) throw new Error("Resource not found.");
  }
}

module.exports = {
  UpdateUserService,
};
