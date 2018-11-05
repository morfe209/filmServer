const mongoose = require("mongoose");
const winston = require("winston");
//======================================================================
//connect to DB
module.exports = function() {
  mongoose
    .connect(
      "mongodb://localhost/vidly1",
      { useNewUrlParser: true }
    )
    .then(() => winston.info("Connected to MongoDB"));
};
//Old version
// mongoose
//   .connect(
//     "mongodb://localhost/vidly1",
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.error("Could not connect to MongoDb"));
