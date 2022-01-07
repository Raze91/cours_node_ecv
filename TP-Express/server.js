const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const usersRoute = require("./handlers/users")

const app = express();

app.use(bodyParser.json());

routes(app);
usersRoute(app);

app.listen(3000);