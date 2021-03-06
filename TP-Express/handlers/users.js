const express = require("express");
module.exports = function (app) {
    app.get("/users", (req, res) => {
        res.send("All users");
    });

    app.get("/users/:id", (req, res) => {
        res.send(`User id: ${req.params.id}`);
    });

    app.post("/users", (req, res) => {
        res.send("Create user");
    });

    app.put("/users/:id", (req, res) => {
        res.send(`Edit user id: ${req.params.id}`)
    })

    app.delete("/users/:id", (req, res) => {
        res.send(`Delete user id: ${req.params.id}`).end();
    });
}