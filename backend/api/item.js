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

  if (description.length > 500) {
    return res.status(401).send('Description must be less than 500 characters');
  }

  if (name.length > 25) {
    return res.status(401).send('Name must be less than 25 characters');
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

// router.get('/', async (req, res) => {
//   try {
//     const queryObj = { ...req.query };
//     const excludeFields = ['page', 'sort', 'limit', 'fields'];
//     excludeFields.forEach((el) => delete queryObj[el]);

//     let queryStr = JSON.stringify(queryObj);
//     queryStr = JSON.parse(
//       queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
//     );

//     let sortBy;

//     if (req.query.sort) {
//       sortBy = req.query.sort.split(',').join(' ') + ' _id';
//     }

//     let fieldsDel;
//     if (req.query.fields) {
//       fieldsDel = req.query.fields.split(',').join(' ');
//     } else {
//       fieldsDel = '-__v';
//     }

//     const numProducts = await ProductModel.countDocuments();

//     const page = req.query.page * 1 || 1;
//     const limit = req.query.limit * 1 || 100;
//     const skip = (page - 1) * limit;

//     let product;

//     if (req.query.search) {
//       product = await ProductModel.find({
//         $or: [{ name: { $regex: req.query.search, $options: 'i' } }],
//       })
//         .select(fieldsDel)
//         .skip(skip)
//         .limit(limit)
//         .sort(sortBy)
//         .populate('user');
//     } else {
//       product = await ProductModel.find(queryStr)
//         .select(fieldsDel)
//         .skip(skip)
//         .limit(limit)
//         .sort(sortBy)
//         .populate('user');
//     }

//     if (skip > numProducts) {
//       return res.status(204).json({
//         status: 'NoItems',
//         results: [],
//       });
//     }

//     res.status(200).json({
//       status: 'success',
//       total: numProducts,
//       results: product.length,
//       product,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(404).json({
//       status: 'fail',
//       message: error,
//     });
//   }
// });

router.get('/', async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludeFields = ['page', 'sort', 'limit', 'fields', 'search'];
    excludeFields.forEach((el) => delete queryObj[el]);

    if (req.query.search) {
      queryObj.name = { $regex: req.query.search, $options: 'i' };
    }

    if (req.query.price) {
      const priceRange = {};
      if (req.query.price.gte && !isNaN(req.query.price.gte)) {
        priceRange.$gte = parseFloat(req.query.price.gte);
      }
      if (req.query.price.lte && !isNaN(req.query.price.lte)) {
        priceRange.$lte = parseFloat(req.query.price.lte);
      }
      if (Object.keys(priceRange).length > 0) {
        queryObj.price = priceRange;
      }
    }

    let sortBy;

    if (req.query.sort) {
      sortBy = req.query.sort.split(',').join(' ') + ' _id';
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

    const product = await ProductModel.find(queryObj)
      .select(fieldsDel)
      .skip(skip)
      .limit(limit)
      .sort(sortBy)
      .populate('user');

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

    const queryObj = { ...req.query };
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach((el) => delete queryObj[el]);

    queryObj.user = req.params.userId;

    let queryStr = JSON.stringify(queryObj);
    queryStr = JSON.parse(
      queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
    );

    const numProducts = await ProductModel.countDocuments(queryStr);

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 100;
    const skip = (page - 1) * limit;

    const product = await ProductModel.find(queryStr)
      .select(fieldsDel)
      .populate('user')
      .skip(skip)
      .limit(limit)
      .sort(sortBy);

    if (product.length === 0) {
      return res
        .status(404)
        .json({ message: 'No products found for the specified user' });
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
