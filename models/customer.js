const mongoose = require("mongoose");
const { todoSchema } = require("./todo");

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
    enum: ["customer", "admin"],
    default: "customer",
  },
  todos: [todoSchema],
});

const customer = mongoose.model("customer", customerSchema);

module.exports = { customer };
