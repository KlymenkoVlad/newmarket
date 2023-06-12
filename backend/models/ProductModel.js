const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProductSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },

  name: { type: String, required: true },
  price: { type: Number, required: true },
  pictures: [{ type: String, required: true }],
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  category: [{ type: String, required: true }],
  rating: {
    type: Number,
    enum: [0, 1, 2, 3, 4, 5],
    default: 0,
  },
  discount: { type: Number },

  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Product", ProductSchema);
