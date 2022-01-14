const express = require("express");
const router = express.Router();

const userHandler = require("../handlers/user.handler");
const { UsersMiddleware } = require("../middlewares/user.middleware");
const userValidators = require("../validators/user.validator");
const validator = require('express-joi-validation').createValidator({});


router.use(UsersMiddleware);

router.get("/", validator.response(userValidators.getAllUsersSchema), userHandler.getUsers);
router.get("/:id", validator.response(userValidators.getUserSchema), validator.query(userValidators.getUserQuerySchema), userHandler.getUser);
router.post("/", validator.body(userValidators.createUserSchema), userHandler.createUser);
router.patch("/:id", validator.body(userValidators.editUserSchema), userHandler.editUser);
router.delete("/:id", userHandler.deleteUser);

module.exports = router;