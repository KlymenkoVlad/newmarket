const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const ProductModel = require("../models/ProductModel");

// Create a Product

router.post("/", authMiddleware, async (req, res) => {
  const {
    name,
    price,
    pictures,
    description,
    quantity,
    rating,
    category,
    discount,
  } = req.body;

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

  if (!price) {
    return res.status(401).send("Please provide product`s price");
  }

  if (!category) {
    return res.status(401).send("Please provide product`s category");
  }

  try {
    const newProduct = {
      user: req.userId,
      name,
      pictures,
      description,
      quantity,
      price,
      category,
    };

    if (rating) newProduct.rating = rating;
    if (discount) newProduct.discount = discount;

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
  const page = +req.query.page || 1;
  const limit = +req.query.limit || 40;
  const skip = (page - 1) * limit;

  try {
    const product = await ProductModel.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .populate("user");

    if (req.query.page) {
      const numProducts = await ProductModel.countDocuments();
      if (skip >= numProducts) throw new Error("This page doesn`t exist");
    }

    return res.status(200).json({
      status: "success",
      results: product.length,
      data: {
        data: product,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
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
