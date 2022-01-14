module.exports = function (app, postHandler, validator, postValidators) {

    app.get("/posts", validator.response(postValidators.getAllPostsSchema), postHandler.getPosts);

    app.get("/posts/:id", validator.response(postValidators.getPostSchema), validator.query(postValidators.getPostQuerySchema), postHandler.getPost);

    app.post("/posts", validator.body(postValidators.createPostSchema), postHandler.createPost);

    app.patch("/posts/:id", validator.body(postValidators.editPostSchema), postHandler.editPost);

    app.delete("/posts/:id", postHandler.deletePost);
}