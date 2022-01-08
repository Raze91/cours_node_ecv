module.exports = function (app, postHandler) {

    app.get("/posts", postHandler.getPosts);

    app.get("/posts/:id", postHandler.getPost);

    app.post("/posts", postHandler.createPost);

    app.patch("/posts/:id", postHandler.editPost);

    app.delete("/posts/:id", postHandler.deletePost);
}