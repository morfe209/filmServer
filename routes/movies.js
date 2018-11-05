const express = require("express");
const router = express.Router();
const { Movie, validate } = require("../models/movie");
const { Genre } = require("../models/genre");

router.get("/", async (req, res) => {
  const movies = await Movie.find().sort("title");

  res.send(movies);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send("invalid genre");

  const { title, numberInStock, dailyRentalRate } = req.body;
  const movie = new Movie({
    title,
    numberInStock,
    dailyRentalRate,
    genre: {
      _id: genre._id,
      name: genre.name
    }
  });
  await movie.save();
  res.send(movie);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = Genre.findById(req.body.genreId);

  if (!genre) return res.status(400).send("invalid genre");

  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    {
      title,
      numberInStock,
      dailyRentalRate,
      genre: {
        _id: genre._id,
        name: genre.name
      }
    },
    { new: true }
  );

  if (!movie) return res.status(404).send("movie not found, id wrong");

  res.send(movie);
});

router.delete("/:id", async (req, res) => {
  const movie = await Movie.findByIdAndRemove(req.params.id);

  if (!movie) return res.status(404).send("movie not found, id wrong");

  res.send(movie);
});
router.get("/:id", async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) return res.status(404).send("movie not found, id wrong");

  res.send(movie);
});

module.exports = router;
