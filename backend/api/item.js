const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const ProductModel = require("../models/ProductModel");

// Create a Product

router.post("/", authMiddleware, async (req, res) => {
  const { name, pictures, description, quantity, size, rating } = req.body;

  if (name.length < 1 || description.length < 1) {
    return res
      .status(401)
      .send("Name and description must be atleast 1 character");
  }

  if (!quantity) {
    return res.status(401).send("You need to specify quantity");
  }

  if (!pictures) {
    return res.status(401).send("Please provide pictures of product");
  }

  try {
    const newProduct = {
      user: req.userId,
      name,
      pictures,
      description,
      quantity,
    };

    if (size) newProduct.size = size;
    if (rating) newProduct.rating = rating;

    const product = await new ProductModel(newProduct).save();

    const postCreated = await ProductModel.findById(product._id).populate(
      "user"
    );

    return res.json(postCreated);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

// Get all Product

router.get("/", async (req, res) => {
  try {
    const product = await ProductModel.find()
      .sort({ createdAt: -1 })
      .populate("user");

    if (product.length === 0) {
      return res.json([]);
    }

    return res.json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

//Get one Product

router.get("/:productId", async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.productId);

    if (!product) {
      return res.status(404).send("Post not found");
    }

    return res.json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
