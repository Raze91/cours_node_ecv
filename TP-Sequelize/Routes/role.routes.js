module.exports = function (app, roleHandler, validator, roleValidators) {

    app.get("/roles", validator.response(roleValidators.getAllRolesSchema), roleHandler.getRoles)

    app.get("/roles/:id", validator.response(roleValidators.getRoleSchema), roleHandler.getRole)

    app.post("/roles", validator.body(roleValidators.createRoleSchema), roleHandler.createRole);

    app.patch("/roles/:id", validator.body(roleValidators.editRoleSchema), roleHandler.editRole);

    app.delete("/roles/:id", roleHandler.deleteRole);
}