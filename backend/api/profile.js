const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");

const validatePassword = (password) => {
  return String(password).match(/^(?=.*[0-9])(?=.*[a-z]).{6,}$/);
};

router.put("/update", authMiddleware, async (req, res) => {
  try {
    const { userId } = req;

    const { name, email, role } = req.body;

    const filteredBody = {};

    if (name && name.length > 1) filteredBody.name = name;
    if (email && name.length > 1) filteredBody.email = email;
    if (role) filteredBody.role = role;

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      filteredBody,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        user: updatedUser,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

router.post("/updatePassword", authMiddleware, async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    if (!validatePassword(newPassword)) {
      res.status(401).send("Invalid new Password. At least 8 characters");
    }

    const user = await UserModel.findById(req.userId).select("+password");

    const isNewPassword = await bcrypt.compare(newPassword, user.password);
    if (isNewPassword) {
      return res.status(401).send("Password is the same");
    }

    const isPassword = await bcrypt.compare(oldPassword, user.password);
    if (!isPassword) {
      return res.status(401).send("Invalid password");
    }

    user.password = await bcrypt.hash(newPassword, 12);
    await user.save();
    return res.status(200).send("Updated");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
