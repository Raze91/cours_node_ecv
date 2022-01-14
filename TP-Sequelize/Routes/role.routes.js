const express = require("express");
const router = express.Router();

const roleHandler = require("../handlers/role.handler");
const roleValidators = require("../validators/role.validator");
const validator = require('express-joi-validation').createValidator({ passError: true });

router.get("/", validator.response(roleValidators.getAllRolesSchema), roleHandler.getRoles)
router.get("/:id", validator.response(roleValidators.getRoleSchema), roleHandler.getRole)
router.post("/", validator.body(roleValidators.createRoleSchema), roleHandler.createRole);
router.patch("/:id", validator.body(roleValidators.editRoleSchema), roleHandler.editRole);
router.delete("/:id", roleHandler.deleteRole);

module.exports = router;