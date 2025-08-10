// backend/config/db.js
const mongoose = require('mongoose');

const ConnectDB = async () => {
  try {
    console.log("Connecting to:", process.env.MONGO_URI); // check value
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB connection error:", err.message);
  }
};

module.exports = ConnectDB;
