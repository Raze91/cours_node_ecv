module.exports = function (app, userHandler) {

    app.get("/users", userHandler.getUsers);

    app.get("/users/:id", userHandler.getUser);

    app.post("/users", userHandler.createUser);

    app.patch("/users/:id", userHandler.editUser);

    app.delete("/users/:id", userHandler.deleteUser);
}