const { db } = require("../../config/database");

class GetManyUsersService {
  async execute() {
    const sql = "SELECT * FROM users";

    const client = await db.connect();
    const user = await client.query(sql);

    return {
      user,
    };
  }
}

module.exports = {
  GetManyUsersService,
};
