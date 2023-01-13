const { db } = require("../../config/database");

class GetUserByIdService {
  async execute(id) {
    const sql = `SELECT * FROM users WHERE id = '${id}'`;

    const client = await db.connect();
    const user = await client.query(sql);
    if (!user.rows.length) throw new Error("Resource not found.");

    return {
      user,
    };
  }
}

module.exports = {
  GetUserByIdService,
};
