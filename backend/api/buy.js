const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const ProductModel = require("../models/ProductModel");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// router.get("/checkout-session/:productId", authMiddleware, async (req, res) => {
//   try {
//     const product = await ProductModel.findById(req.params.productId);
//     const user = await ProductModel.findById(req.userId);
//     console.log(process.env.STRIPE_SECRET_KEY);

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       success_url: `${req.protocol}://${req.get("host")}/`,
//       //! Not very secure way of doing that
//       cancel_url: `${req.protocol}://${req.get("host")}/product/${
//         product.name
//       }`,
//       //   customer_email: user.email,
//       client_reference_id: req.params.productId,
//       line_items: [
//         {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: `${product.name}`,
//               description: product.description,
//               images: product.mainPicture,
//             },
//             unit_amount: product.price * 100,
//           },
//           quantity: 1,
//         },
//       ],
//     });

//     res.status(200).json({
//       status: "success",
//       session,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send("Server error");
//   }
// });

router.get("/checkout-session/:productId", authMiddleware, async (req, res) => {
  const product = await ProductModel.findById(req.params.productId);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: `${req.protocol}://${req.get("host")}/`,
    //! Not very secure way of doing that
    cancel_url: `${req.protocol}://${req.get("host")}/`,
    // customer_email: req.user.email,
    client_reference_id: req.params.productId,
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `${product.name}`,
            description: product.description,
            images: "product.mainPicture",
          },
          unit_amount: product.price * 100,
        },
        quantity: 1,
      },
    ],
  });

  res.status(200).json({
    status: "success",
    session,
  });
});

module.exports = router;
