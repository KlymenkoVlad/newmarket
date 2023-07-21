const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const router = express.Router();
const UserModel = require('../models/UserModel');
const ProductModel = require('../models/ProductModel');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY.toString());

router.post('/create-checkout-session', async (req, res) => {
  try {
    const params = {
      mode: 'payment',
      billing_address_collection: 'auto',
      shipping_options: [
        { shipping_rate: 'shr_1NKh1CCNUuNqqVPPFJFmvlfz' },
        { shipping_rate: 'shr_1NKh2WCNUuNqqVPPWwxsJHxh' },
      ],
      line_items: req.body.map((item) => {
        return {
          price_data: {
            currency: 'usd',

            product_data: {
              name: item.name,
              description: item.description,
              images: [item.mainPicture],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/canceled`,
    };

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create(params);

    res.status(200).json(session);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
});

module.exports = router;
