const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { Rental, validate } = require("../models/rental");
const { Customer } = require("../models/customer");
const { Movie } = require("../models/movie");

router.post("/", async (req, res) => {
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  // const customer = await Customer.findById(req.body.customerId);
  // if (!customer) return res.status(400).send("invalid customer");

  // const movie = await Movie.findById(req.body.movieId);
  // if (!movie) return res.status(400).send("invalid movie");

  // // const { title, numberInStock, dailyRentalRate } = req.body;
  // const rental = new Rental({ customer, movie });
  // await rental.save();

  // res.send(rental);
  if (!req.body.customerId)
    return res.status(400).send("customerId is not provided");
  if (!req.body.movieId) return res.status(400).send("movieId is not provided");

  const customer = await Customer.findById(req.body.customerId);
  if (!customer) return res.status(404).send("invalid customer");

  const movie = await Movie.findById(req.body.movieId);
  if (!movie) return res.status(404).send("invalid movie");

  res.status(401).send("unauthorezied");
});

module.exports = router;
