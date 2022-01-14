module.exports = function (app, commentHandler, validator, commentValidators) {

    app.get("/comments", validator.response(commentValidators.getAllCommentsSchema), commentHandler.getComments);

    app.get("/comments/:id", validator.response(commentValidators.getCommentSchema), commentHandler.getComment);

    app.post("/comments", validator.body(commentValidators.createCommentSchema), commentHandler.createComment);

    app.patch("/comments/:id", validator.body(commentValidators.editCommentSchema), commentHandler.editComment);

    app.delete("/comments/:id", commentHandler.deleteComment);
}