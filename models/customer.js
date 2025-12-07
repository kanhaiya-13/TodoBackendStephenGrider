const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  email: {
    type: String,
  },
  hasedPassword: {
    type: String,
  },
  role: {
    type: String,
    enum:["customer","admin"],
    default:"customer"
  }
});

const customer = mongoose.model("customer", customerSchema);

module.exports = { customer };
