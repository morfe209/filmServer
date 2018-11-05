const Joi = require("joi");
const mongoose = require("mongoose");

const customerShcema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  isGold: {
    type: Boolean,
    default: false
  },
  phone: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});
const Customer = mongoose.model("Customer", customerShcema);

function validateCustomer(customer) {
  const schema = {
    name: Joi.string()
      .required()
      .min(5)
      .max(50),
    isGold: Joi.boolean(),
    phonr: Joi.string()
      .required()
      .min(8)
  };
  return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validate = validateCustomer;
