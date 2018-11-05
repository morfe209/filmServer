const mongoose = require("mongoose");
const Joi = require("joi");

const genreShcema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});
const Genre = mongoose.model("Genre", genreShcema);

function validateGenre(genre) {
  const schema = {
    name: Joi.string()
      .required()
      .min(3)
  };
  return Joi.validate(genre, schema);
}

exports.Genre = Genre;
exports.validate = validateGenre;
exports.genreShcema = genreShcema;
