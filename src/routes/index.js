const express = require("express");
const { AddressController } = require("../controllers/AddressController");
const { UserController } = require("../controllers/UserController");

const router = express.Router();

const userController = new UserController();
const addressController = new AddressController();

router.post("/users/create", userController.create);
router.get("/users/all", userController.getManyUsers);
router.get("/users/:id", userController.getById);
router.patch("/users/:id/update", userController.update);
router.delete("/users/:id/delete", userController.delete);

router.post("/addresses/create", addressController.create);

module.exports = {
  router,
};
