const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();

require("./startup/logging")();
require("./startup/validation")();
require("./startup/config")();
require("./startup/db")();
require("./startup/routes")(app);

const port = process.env.PORT || 3002;
const server = app.listen(port, () =>
  winston.info(`Server started in port ${port}...`)
);
module.exports = server;
