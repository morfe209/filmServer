const config = require("config");

module.exports = function() {
  //======================================================================
  //check if we put to config file jwtPrivateKey
  if (!config.get("jwtPrivateKey")) {
    throw new Error("FATAL ERROR: jwtPrivateKey is not defined.");
    //Old version
    // console.error("FATAL ERROR: jwtPrivateKey is not defined.");
    // process.exit(1);
  }
  // console.log(config.get("jwtPrivateKey"));
};
