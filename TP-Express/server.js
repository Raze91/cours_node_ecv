const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

require("./routes")(app);
require("./handlers/users")(app);

app.listen(3000);