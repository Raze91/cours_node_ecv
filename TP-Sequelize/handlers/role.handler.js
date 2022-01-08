const { Role } = require("../models");

exports.getRoles = async function getRoles(req, res) {
    try {
        const roles = await Role.findAll();
        res.send(roles);

    } catch (e) {
        console.error(e);
        res.send("Error");
    }
}

exports.getRole = async function getRole(req, res) {
    try {
        const newRoles = await Role.findOne({ where: { id: req.params.id } });
        res.send(newRoles);

    } catch (e) {
        console.error(e);
        res.send("Error");
    }
}

exports.createRole = async function createRole(req, res) {
    try {
        const newRole = await Role.create(req.body);
        res.json(newRole)
    } catch (e) {
        console.error(e);
        res.send("Error");
    }
}

exports.editRole = async function editRole(req, res) {
    try {
        await Role.update(req.body, { where: { id: req.params.id } });
        res.send("Role updated");
    } catch (e) {
        console.error(e);
        res.send("Error");
    }
}

exports.deleteRole = async function deleteRole(req, res) {
    try {
        await Role.destroy({ where: { id: req.params.id } });
        res.send("Role destroyed")

    } catch (e) {
        console.error(e);
        res.send("Error");
    }
}