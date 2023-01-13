const { CreateAddressService } = require("../services/address/CreateAddressService");

class AddressController {
  async create(req, res) {
    const { body } = req;
    const test = new CreateAddressService();
    await test.execute(body);

    return res.status(201).json();
  }
}

module.exports = {
  AddressController,
};
