const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const ProductModel = require('../models/ProductModel');

// Create a Product

router.post('/', authMiddleware, async (req, res) => {
  const {
    name,
    price,
    mainPicture,
    pictures,
    description,
    quantity,
    category,
    rating,
    pastPrice,
  } = req.body;

  if (name.length < 1 || description.length < 1) {
    return res
      .status(401)
      .send('Name and description must be atleast 1 character');
  }

  if (!quantity) {
    return res.status(401).send('You need to specify quantity');
  }

  if (!pictures) {
    return res.status(401).send('Please provide pictures of product');
  }

  if (!price) {
    return res.status(401).send('Please provide product`s price');
  }

  if (!category) {
    return res.status(401).send('Please provide product`s category');
  }

  if (!mainPicture) {
    return res.status(401).send('Please provide product`s main picture');
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
      mainPicture,
    };

    if (rating) newProduct.rating = rating;
    if (pastPrice) newProduct.pastPrice = pastPrice;
    if (pictures) newProduct.pictures = pictures;

    const product = await new ProductModel(newProduct).save();

    const postCreated = await ProductModel.findById(product._id).populate(
      'user'
    );

    return res.json(postCreated);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Server error');
  }
});

// Get all Product

router.get('/', async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = JSON.parse(
      queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
    );

    let sortBy;

    if (req.query.sort) {
      sortBy = req.query.sort.split(',').join(' ');
    }

    let fieldsDel;
    if (req.query.fields) {
      fieldsDel = req.query.fields.split(',').join(' ');
    } else {
      fieldsDel = '-__v';
    }

    const numProducts = await ProductModel.countDocuments();

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 100;
    const skip = (page - 1) * limit;

    const product = await ProductModel.find(queryStr)
      .select(fieldsDel)
      .populate('user')
      .skip(skip)
      .limit(limit)
      .sort(sortBy);

    if (req.query.page) {
      if (skip > numProducts) {
        // throw new Error('This page doesn`t exist');
      }
    }

    res.status(200).json({
      status: 'success',
      total: numProducts,
      results: product.length,
      product,
    });

    // Set the header X-Total-Count
  } catch (error) {
    console.error(error);
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
});

//Get one Product

router.get('/:productId', async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.productId);

    if (!product) {
      return res.status(404).send('Post not found');
    }

    return res.json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
