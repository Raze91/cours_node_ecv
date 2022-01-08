const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./Routes/user.routes");
const userHandler = require("./handlers/user.handler");

const roleRoutes = require("./Routes/role.routes");
const roleHandler = require("./handlers/role.handler")

const postRoutes = require("./Routes/post.routes");
const postHandler = require("./handlers/post.handler")

const commentRoutes = require("./Routes/comment.routes");
const commentHandler = require("./handlers/comment.handler")



const app = express();

app.use(bodyParser.json());

userRoutes(app, userHandler);
roleRoutes(app, roleHandler);
postRoutes(app, postHandler);
commentRoutes(app, commentHandler);

app.listen(3000);