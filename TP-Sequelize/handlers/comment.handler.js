const { Comment } = require("../models");

exports.getComments = async function getComments(req, res) {
    try {
        const comments = await Comment.findAll();
        res.send(comments);

    } catch (e) {
        console.error(e);
        res.send("Error");
    }
}

exports.getComment = async function getComment(req, res) {
    try {
        const comment = await Comment.findOne({ where: { id: req.params.id } });
        res.send(comment);

    } catch (e) {
        console.error(e);
        res.send("Error");
    }
}

exports.createComment = async function createComment(req, res) {
    try {
        const newComment = await Comment.create(req.body);
        res.json(newComment);

    } catch (e) {
        console.error(e);
        res.send("Error");
    }
}

exports.editComment = async function editComment(req, res) {
    try {
        await Comment.update(req.body, { where: { id: req.params.id } });
        res.send("Comment updated");
    } catch (e) {
        console.error(e);
        res.send("Error");
    }
}

exports.deleteComment = async function deleteComment(req, res) {
    try {
        await Comment.destroy({ where: { id: req.params.id } });
        res.send("Comment destroyed")

    } catch (e) {
        console.error(e);
        res.send("Error");
    }
}