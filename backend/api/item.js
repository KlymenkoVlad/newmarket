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

    const productCreated = await ProductModel.findById(product._id).populate(
      'user'
    );

    return res.json(productCreated);
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

    let product;

    if (req.query.search) {
      product = await ProductModel.find({
        $or: [{ name: { $regex: req.query.search, $options: 'i' } }],
      })
        .select(fieldsDel)
        .populate('user')
        .skip(skip)
        .limit(limit)
        .sort(sortBy);
    } else {
      product = await ProductModel.find(queryStr)
        .select(fieldsDel)
        .populate('user')
        .skip(skip)
        .limit(limit)
        .sort(sortBy);
    }

    if (skip > numProducts) {
      return res.status(204).json({
        status: 'NoItems',
        results: [],
      });
    }

    res.status(200).json({
      status: 'success',
      total: numProducts,
      results: product.length,
      product,
    });
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
    const product = await ProductModel.findById(req.params.productId).populate(
      'user'
    );

    if (!product) {
      return res.status(404).send('Product not found');
    }

    return res.json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Server error');
  }
});

//Get All Products of user

router.get('/user/:userId', async (req, res) => {
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

    let product;

    product = await ProductModel.find(queryStr)
      .select(fieldsDel)
      .populate('user')
      .skip(skip)
      .limit(limit)
      .sort(sortBy);

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

//Update Product

router.put('/:productId', authMiddleware, async (req, res) => {
  const { userId } = req;

  try {
    const product = await ProductModel.findById(req.params.productId).populate(
      'user'
    );

    if (!product) {
      return res.status(404).send('Product not found');
    }

    const isUser = product.user._id.toString() === userId;

    if (!isUser) {
      return res.status(404).send('You cannot edit this product');
    }

    const Product = await ProductModel.findByIdAndUpdate(
      req.params.productId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: 'success',
      data: Product,
    });
  } catch (error) {
    console.error(error);

    if (error.name === 'ValidationError') {
      return res.status(400).json({
        status: 'fail',
        message: error.message,
      });
    }

    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
});

module.exports = router;
