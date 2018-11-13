const mongoose = require("mongoose");
const winston = require("winston");
const config = require("config");
//======================================================================
//connect to DB
module.exports = function() {
  mongoose
    .connect(
      config.get("db"),
      { useNewUrlParser: true }
    )
    .then(() => winston.info(`Connected to MongoDB ${config.get("db")}...`));
};
//Old version
// mongoose
//   .connect(
//     "mongodb://localhost/vidly1",
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.error("Could not connect to MongoDb"));
