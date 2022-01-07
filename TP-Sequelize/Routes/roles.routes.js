module.exports = function (app, Role) {

    app.get("/roles", async (req, res) => {
        try {
            const roles = await Role.findAll();
            res.send(roles);

        } catch (e) {
            console.error(e);
            res.send("Error");
        }
    })
    
    app.get("/roles/:id", async (req, res) => {
        try {
            const newRoles = await Role.findOne({ where: { id: req.params.id } });
            res.send(newRoles);

        } catch (e) {
            console.error(e);
            res.send("Error");
        }
    })

    app.post("/roles", async (req, res) => {

        try {
            const newRole = await Role.create(req.body);
            res.json(newRole)
        } catch (e) {
            console.error(e);
            res.send("Error");
        }
    });

    app.patch("/roles/:id", async (req, res) => {
        try {
            await Role.update(req.body, { where: { id: req.params.id } });
            res.send("Role updated");
        } catch (e) {
            console.error(e);
            res.send("Error");
        }
    })

    app.delete("/roles/:id", async (req, res) => {
        try {
            await Role.destroy({ where: { id: req.params.id } });
            res.send("Role destroyed")

        } catch (e) {
            console.error(e);
            res.send("Error");
        }
    })
}