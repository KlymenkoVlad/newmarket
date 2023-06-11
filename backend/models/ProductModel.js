const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProductSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },

  name: { type: String, required: true },
  pictures: [{ type: String }],
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  size: {
    type: String,
    default: "only one",
    enum: ["only one", "xs", "s", "m", "l", "xl"],
  },
  rating: {
    type: Number,
    enum: [0, 1, 2, 3, 4, 5],
    default: 0,
  },

  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Product", ProductSchema);
