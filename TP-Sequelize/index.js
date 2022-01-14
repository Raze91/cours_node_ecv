const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./Routes/user.routes");
const rolesRoutes = require("./Routes/role.routes");
const postsRoutes = require("./Routes/post.routes");
const commentsRoutes = require("./Routes/comment.routes");


const globalMiddlewares = require("./middlewares/server.middleware");
const errorMiddleware = require("./middlewares/error-handler.middleware");
const joiErrorHandler = require("./middlewares/joi-error-handler.middleware");

const app = express();



app.use(bodyParser.json());

app.use(globalMiddlewares.dateMiddleware);
app.use(globalMiddlewares.ecvMiddleware);
app.use(globalMiddlewares.authorizationMiddleware)

app.use('/users', userRoutes);
app.use('/posts', postsRoutes);
app.use('/roles', rolesRoutes);
app.use('/comments', commentsRoutes);

app.use(joiErrorHandler);
app.use(errorMiddleware);

app.listen(3000);