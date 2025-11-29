const { Mongoose } = require("mongoose");

const Schema = Mongoose.Schema;

const customerSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const customer = Mongoose.model("customer", customerSchema);

module.exports = { customer };
