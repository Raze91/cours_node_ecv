module.exports = function (app) {

    app.get("/hello-world", (req, res) => {
        res.send({
            "message": "Hello world !"
        })
    });

    app.get("/message", (req, res) => {
        if (req.query.message.length > 20) {
            res.status(400).json({ message: "Bad Request" });
        } else {
            res.send(req.query.message)
        }
    });

    app.post("/infos/headers", (req, res) => {
        res.send(req.headers)
    })

    app.post("/payload", (req, res) => {
        console.log(req.body)

        const dateArray = req.body.birthdate.split("/");
        const date = new Date(`${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`);;
        const ageDiff = Date.now() - date.getTime();
        const ageDate = new Date(ageDiff); // miliseconds from epoch
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);

        if (age > 18) {
            res.status(200).json({ message: `Welcome : ${req.body.firstname}` });
        } else {
            res.status(403).json({ message: "Forbidden" });
        }
    })

    app.get("/rick-roll", (req, res) => {
        res.redirect("https://youtube.com/watch?v=dQw4w9WgXcQ")
    });

    app.delete("/custom-header", (req, res) => {
        res.set({ Message: "Hello world !" }).end();
    });

    app.get("/params/:id/:key/:slug", (req, res) => {
        res.send(req.params);
    })
} 