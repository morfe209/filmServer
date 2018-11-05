const winston = require("winston");
require("winston-mongodb");
require("express-async-errors");

module.exports = function() {
  // handled Exeptions
  //=====================================================================
  //catch uncaughtExeption in uncaughtExeption.log
  winston.handleExceptions(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: "uncaughtExeption.log" })
  );
  //=====================================================================
  // catch unhandledRejection in uncaughtExeption.log
  process.on("unhandledRejection", ex => {
    throw ex;
  });
  //=====================================================================
  //catch handledExeptions in logfile.log
  winston.add(winston.transports.File, {
    filename: "logfile.log"
  });
  //=====================================================================
  //catch handledExeptions in mongo db log collections
  winston.add(winston.transports.MongoDB, {
    db: "mongodb://localhost/vidly1",
    level: "info"
  });
};
