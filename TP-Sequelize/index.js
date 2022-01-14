const express = require("express");
const bodyParser = require("body-parser");

const validator = require('express-joi-validation').createValidator({});

const userRoutes = require("./Routes/user.routes");
const userHandler = require("./handlers/user.handler");
const userValidators = require("./validators/user.validator");

const roleRoutes = require("./Routes/role.routes");
const roleHandler = require("./handlers/role.handler");
const roleValidators = require("./validators/role.validator");

const postRoutes = require("./Routes/post.routes");
const postHandler = require("./handlers/post.handler");
const postValidators = require("./validators/post.validator");

const commentRoutes = require("./Routes/comment.routes");
const commentHandler = require("./handlers/comment.handler");
const commentValidators = require("./validators/comment.validator");




const app = express();

app.use(bodyParser.json());

userRoutes(app, userHandler, validator, userValidators);
roleRoutes(app, roleHandler, validator, roleValidators);
postRoutes(app, postHandler, validator, postValidators);
commentRoutes(app, commentHandler, validator, commentValidators);

app.listen(3000);