const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

const userShcema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    unique: true,
    minlength: 5,
    maxlength: 255,
    required: true
  },
  password: {
    type: String,
    require: true,
    minlength: 5,
    maxlength: 1024
  },
  isAdmin: Boolean
});
userShcema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    { _id: this._id, name: this.name },
    config.get("jwtPrivateKey")
  );
  return token;
};
const User = mongoose.model("User", userShcema);

function validateUser(user) {
  const schema = {
    name: Joi.string()
      .required()
      .min(5)
      .max(50),
    email: Joi.string()
      .required()
      .email()
      .min(5)
      .max(50),
    password: Joi.string()
      .required()
      .min(5)
      .max(255)
  };
  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
