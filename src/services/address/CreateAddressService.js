const { db } = require("../../config/database");
const { v4: uuidv4 } = require("uuid");

class CreateAddressService {
  async execute(request) {
    const { street, number, city, state, cep, user_id } = request;

    const sql = `
    INSERT INTO addresses (id, street, number, city, state, cep, user_id)
    VALUES ('${uuidv4()}', '${street}', '${number}', '${city}', '${state}', '${cep}', '${user_id}')
    `;

    const client = await db.connect();
    const user = await client.query(sql);

    return {
      user,
    };
  }
}

module.exports = {
  CreateAddressService,
};
