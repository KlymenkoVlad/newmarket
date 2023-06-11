const mongoose = require("mongoose");

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {});
    console.warn("Mongodb connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = connectDb;
