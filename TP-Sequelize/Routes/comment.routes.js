const express = require("express");
const router = express.Router();

const commentHandler = require("../handlers/comment.handler");
const commentValidators = require("../validators/comment.validator");
const { CommentMiddleware } = require("../middlewares/comment.middleware");

const validator = require('express-joi-validation').createValidator({ passError: true });

router.use(CommentMiddleware);

router.get("/", validator.response(commentValidators.getAllCommentsSchema), commentHandler.getComments);
router.get("/:id", validator.response(commentValidators.getCommentSchema), commentHandler.getComment);
router.post("/", validator.body(commentValidators.createCommentSchema), commentHandler.createComment);
router.patch("/:id", validator.body(commentValidators.editCommentSchema), commentHandler.editComment);
router.delete("/:id", commentHandler.deleteComment);

module.exports = router;