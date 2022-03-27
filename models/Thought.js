const { Schema, model } = require("mongoose");

const Thought = new Schema({
  description: { type: String, required: true },
  author: { type: String, required: true, default: "Anonimo" },
  date: { type: String, required: true },
  likes: { type: Number, default: 0 },
});

module.exports = model("Thought", Thought);
