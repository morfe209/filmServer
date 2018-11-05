const bcrypt = require("bcrypt");

async function run() {
  const salt = await bcrypt.genSalt(9);

  console.log(salt);
  const heshed = await bcrypt.hash("1234", salt);
  console.log(heshed);
}

run();
