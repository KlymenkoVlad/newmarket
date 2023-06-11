const express = require("express");

const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const UserModel = require("../models/UserModel");
const ProductModel = require("../models/ProductModel");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePassword = (password) => {
  return String(password).match(/^(?=.*[0-9])(?=.*[a-z]).{6,}$/);
};

router.get("/:email", async (req, res) => {
  const { email } = req.params;
  try {
    if (email.length < 1) return res.status(401).send("Invalid");

    if (!validateEmail(email)) return res.status(401).send("Invalid Email");

    const user = await UserModel.findOne({ email: email.toLowerCase() });

    if (user) return res.status(401).send("email already taken");

    return res.status(200).send("Available");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

//Signup
router.post("/", async (req, res) => {
  const { name, email, password, profilePicUrl, role } = req.body.user;
  if (!validateEmail(email))
    return res.status(401).json({ error: "Invalid Email" });

  if (!validatePassword(password))
    return res.status(401).json({ error: "Invalid Password" });

  try {
    let user;
    user = await UserModel.findOne({ email: email.toLowerCase() });
    if (user) {
      return res.status(401).json({ error: "User already exists" });
    }

    user = new UserModel({
      name,
      email: email.toLowerCase(),
      password,
      profilePicUrl,
      role,
    });

    user.password = await bcrypt.hash(password, 12);
    await user.save();

    const payload = { userId: user._id };
    jwt.sign(
      payload,
      process.env.jwtSecret,
      { expiresIn: "14d" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json(token);
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
