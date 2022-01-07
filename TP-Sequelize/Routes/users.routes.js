module.exports = function (app, User) {

    app.get("/users", async (req, res) => {
        try {
            const users = await User.findAll();
            res.send(users);

        } catch (e) {
            console.error(e);
            res.send("Error");
        }
    })
    
    app.get("/users/:id", async (req, res) => {
        try {
            const user = await User.findOne({ where: { id: req.params.id } });
            res.send(user);

        } catch (e) {
            console.error(e);
            res.send("Error");
        }
    })

    app.post("/users", async (req, res) => {

        try {
            const newUser = await User.create(req.body);
            res.json(newUser);

        } catch (e) {
            console.error(e);
            res.send("Error");
        }
    });

    app.patch("/users/:id", async (req, res) => {
        try {
            await User.update(req.body, { where: { id: req.params.id } });
            res.send("User updated");
        } catch (e) {
            console.error(e);
            res.send("Error");
        }
    })

    app.delete("/users/:id", async (req, res) => {
        try {
            await User.destroy({ where: { id: req.params.id } });
            res.send("User destroyed")

        } catch (e) {
            console.error(e);
            res.send("Error");
        }
    })
}