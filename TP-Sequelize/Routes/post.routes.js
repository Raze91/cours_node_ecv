const express = require("express");
const router = express.Router();

const postHandler = require("../handlers/post.handler");
const postValidators = require("../validators/post.validator");
const { PostMiddleware } = require("../middlewares/post.middleware");

const validator = require('express-joi-validation').createValidator({passError: true});

router.use(PostMiddleware);

router.get("/", validator.response(postValidators.getAllPostsSchema), postHandler.getPosts);
router.get("/:id", validator.response(postValidators.getPostSchema), validator.query(postValidators.getPostQuerySchema), postHandler.getPost);
router.post("/", validator.body(postValidators.createPostSchema), postHandler.createPost);
router.patch("/:id", validator.body(postValidators.editPostSchema), postHandler.editPost);
router.delete("/:id", postHandler.deletePost);

module.exports = router;