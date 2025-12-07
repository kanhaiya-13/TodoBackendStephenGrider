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
    enum: ["customer", "admin"],
    default: "customer",
  },
  todos: (todoArray = [
    {
      title: String,
      priority: {
        type: String,
        enum: ["High", "Medium", "Low"],
        default: "Medium",
      },
      due_time: {
        type: Date,
        required: false,
      },
      status: {
        type: String,
        enum: ["completed", "pending"],
        default: "pending",
      },
    },
  ]),
});

const customer = mongoose.model("customer", customerSchema);

module.exports = { customer };
