const { User, Post } = require("../models")
const createError = require("http-errors");

exports.getUsers = async function getUsers(req, res) {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (e) {
        return next(createError(500));
    }
}

exports.getUser = async function getUser(req, res, next) {
    try {
        const user = await User.findOne({ where: { id: req.params.id } });

        if (req.query && req.query.posts === true) {
            const posts = await Post.findAll({ where: { userId: user.id } })

            res.send({
                "user": user,
                "posts": posts
            });
        } else {
            res.send(user);
        }

    } catch (e) {
        return next(createError(404));
    }
}

exports.createUser = async function createUser(req, res) {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);

    } catch (e) {
        return next(createError(500))
    }
}

exports.editUser = async function editUser(req, res) {
    try {
        await User.update(req.body, { where: { id: req.params.id } });
        res.send("User updated");
    } catch (e) {
        console.error(e);
        res.send("Error");
    }
}

exports.deleteUser = async function deleteUser(req, res) {
    try {
        await User.destroy({ where: { id: req.params.id } });
        res.send("User destroyed")
    } catch (e) {
        console.error(e);
        res.send("Error");
    }
}