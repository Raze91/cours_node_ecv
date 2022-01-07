const express = require("express");
const bodyParser = require("body-parser");
const { User, Role, Post, Comment } = require("./models");
const usersRoutes = require("./Routes/users.routes");
const rolesRoutes = require("./Routes/roles.routes");
const postsRoutes = require("./Routes/posts.routes");
const commentsRoutes = require("./Routes/comments.routes");

const app = express();

app.use(bodyParser.json());

usersRoutes(app, User);
rolesRoutes(app, Role);
postsRoutes(app, Post, Comment);
commentsRoutes(app, Comment);

app.listen(3000);