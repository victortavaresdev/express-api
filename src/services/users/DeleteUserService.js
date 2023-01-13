const { db } = require("../../config/database");

class DeleteUserService {
  async execute(id) {
    const sql = `DELETE FROM users WHERE id = '${id}'`;

    const client = await db.connect();
    const user = await client.query(sql);
    if (!user.rows.length) throw new Error("Resource not found.");
  }
}

module.exports = {
  DeleteUserService,
};
