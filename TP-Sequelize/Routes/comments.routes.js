module.exports = function (app, Comment) {

    app.get("/comments", async (req, res) => {
        try {
            const comments = await Comment.findAll();
            res.send(comments);

        } catch (e) {
            console.error(e);
            res.send("Error");
        }
    })
    
    app.get("/comments/:id", async (req, res) => {
        try {
            const comment = await Comment.findOne({ where: { id: req.params.id } });
            res.send(comment);

        } catch (e) {
            console.error(e);
            res.send("Error");
        }
    })

    app.post("/comments", async (req, res) => {

        try {
            const newComment = await Comment.create(req.body);
            res.json(newComment);

        } catch (e) {
            console.error(e);
            res.send("Error");
        }
    });

    app.patch("/comments/:id", async (req, res) => {
        try {
            await Comment.update(req.body, { where: { id: req.params.id } });
            res.send("Comment updated");
        } catch (e) {
            console.error(e);
            res.send("Error");
        }
    })

    app.delete("/comments/:id", async (req, res) => {
        try {
            await Comment.destroy({ where: { id: req.params.id } });
            res.send("Comment destroyed")

        } catch (e) {
            console.error(e);
            res.send("Error");
        }
    })
}