const mongoose = require("mongoose");
const Joi = require("joi");
const { genreShcema } = require("./genre");

const movieShcema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 255
  },
  genre: {
    type: genreShcema,
    required: true
  },
  numberInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  dailyRentalRate: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  }
});
const Movie = mongoose.model("Movie", movieShcema);

function validateMovie(movie) {
  const schema = {
    title: Joi.string()
      .required()
      .min(5)
      .max(50),
    genreId: Joi.objectId().required(),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
  };
  return Joi.validate(movie, schema);
}

exports.Movie = Movie;
exports.validate = validateMovie;
