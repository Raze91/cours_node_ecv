const { Post, Comment } = require("../models");

exports.getPosts = async function getPosts(req, res) {
    try {
        const posts = await Post.findAll();
        res.send(posts);

    } catch (e) {
        console.error(e);
        res.send("Error");
    }
}

exports.getPost = async function getPost(req, res) {
    try {
        const post = await Post.findOne({ where: { id: req.params.id } });

        if (req.query && req.query.comments === true) {
            const comments = await Comment.findAll({ where: { postId: post.id } })

            res.send({
                "post": post,
                "comments": comments
            });
        } else {
            res.send(post);
        }

    } catch (e) {
        console.error(e);
        res.send("Error");
    }
}

exports.createPost = async function createPost(req, res) {
    try {
        const newPost = await Post.create(req.body);
        res.json(newPost);

    } catch (e) {
        console.error(e);
        res.send("Error");
    }
}

exports.editPost = async function editPost(req, res) {
    try {
        await Post.update(req.body, { where: { id: req.params.id } });
        res.send("Post updated");
    } catch (e) {
        console.error(e);
        res.send("Error");
    }
}

exports.deletePost = async function deletePost(req, res) {
    try {
        await Post.destroy({ where: { id: req.params.id } });
        res.send("Post destroyed")

    } catch (e) {
        console.error(e);
        res.send("Error");
    }
}