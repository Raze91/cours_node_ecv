module.exports = function (app, roleHandler) {

    app.get("/roles", roleHandler.getRoles)

    app.get("/roles/:id", roleHandler.getRole)

    app.post("/roles", roleHandler.createRole);

    app.patch("/roles/:id", roleHandler.editRole);

    app.delete("/roles/:id", roleHandler.deleteRole);
}