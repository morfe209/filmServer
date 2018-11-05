const winston = require("winston");
const express = require("express");
const app = express();

require("./startup/validation")();
require("./startup/logging")();
require("./startup/config")();
require("./startup/db")();
require("./startup/routes")(app);

const port = process.env.PORT || 3002;
app.listen(port, () => winston.info(`Server started in port ${port}...`));
