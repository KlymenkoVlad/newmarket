const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const router = express.Router();
const UserModel = require('../models/UserModel');
const ProductModel = require('../models/ProductModel');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY.toString());

router.post('/create-checkout-session/:productId', async (req, res) => {
  const product = await ProductModel.findById(req.params.productId);

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: product.price * 100,
          product_data: {
            name: `${product.name}`,
            description: product.description,
            images: [product.mainPicture],
          },
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:3000?success=true`,
    cancel_url: `http://localhost:3000?canceled=true`,
  });

  res.redirect(303, session.url);
});

module.exports = router;
