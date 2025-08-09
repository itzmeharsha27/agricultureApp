const mongoose = require('mongoose');

const ConnectDB = async () => {
  try {
    console.log("Using Mongo URI:", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/jeji', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB connection error:", err.message);
  }
};

module.exports = ConnectDB;
