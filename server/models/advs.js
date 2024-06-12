const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  ownername: { type: String, required: true },
  locality: { type: String, required: true },
  image: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Adv", schema);