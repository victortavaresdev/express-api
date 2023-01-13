const { CreateUserService } = require("../services/users/CreateUserService");
const { DeleteUserService } = require("../services/users/DeleteUserService");
const { GetManyUsersService } = require("../services/users/GetManyUsersService");
const { GetUserByIdService } = require("../services/users/GetUserByIdService");
const { UpdateUserService } = require("../services/users/UpdateUserService");

class UserController {
  async create(req, res) {
    const test = new CreateUserService();
    const { body } = req;
    await test.execute(body);

    return res.status(201).json();
  }

  async getManyUsers(req, res) {
    const test = new GetManyUsersService();
    const { user } = await test.execute();
    const usersList = user.rows;

    return res.status(200).json({ users: usersList });
  }

  async getById(req, res) {
    const { id } = req.params;
    const test = new GetUserByIdService();
    const { user } = await test.execute(id);
    const userData = user.rows[0];

    return res.status(200).json(userData);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;
    const test = new UpdateUserService();
    await test.execute(id, body);

    return res.status(200).json();
  }

  async delete(req, res) {
    const { id } = req.params;

    const test = new DeleteUserService();
    await test.execute(id);

    return res.status(204).json();
  }
}

module.exports = {
  UserController,
};
