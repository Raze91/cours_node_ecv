
module.exports = function (app, userHandler, validator, userValidators) {

    app.get("/users", validator.response(userValidators.getAllUsersSchema), userHandler.getUsers);

    app.get("/users/:id", validator.response(userValidators.getUserSchema), validator.query(userValidators.getUserQuerySchema) , userHandler.getUser);

    app.post("/users", validator.body(userValidators.createUserSchema), userHandler.createUser);

    app.patch("/users/:id", validator.body(userValidators.editUserSchema), userHandler.editUser);

    app.delete("/users/:id", userHandler.deleteUser);
}