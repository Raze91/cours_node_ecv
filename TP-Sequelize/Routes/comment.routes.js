module.exports = function (app, commentHandler) {

    app.get("/comments", commentHandler.getComments);

    app.get("/comments/:id", commentHandler.getComment);

    app.post("/comments", commentHandler.createComment);

    app.patch("/comments/:id", commentHandler.editComment);

    app.delete("/comments/:id", commentHandler.deleteComment);
}