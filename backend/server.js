require('dotenv').config(); // ✅ Load environment variables
console.log("SECRET_KEY from env:", process.env.SECRET_KEY || "❌ Not Found");

const express = require('express');
const cors = require('cors'); // ✅ Missing in your code
const ConnectDB = require('./config/db.js');

const app = express(); // ✅ Create app FIRST

// ✅ CORS setup
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// (Optional) If you want specific frontend origin instead of "*"
app.use(cors({
  origin: ["https://your-vercel-app-url.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// ✅ Connect DB
ConnectDB();

// Routes
app.use('/api', require('./routes/items'));
app.use('/api', require('./routes/Register'));
app.use('/api', require('./routes/login'));
app.use('/farmer', require("./index.js"));
app.use('/', require("./index2.js"));
app.use('/api', require('./routes/logout'));

const authenticate = require('./middleware/auth');
app.get('/api/protected', authenticate, (req, res) => {
  res.json({ message: "This is protected data" });
});

app.use('/farmerdata', require('./routes/farmerRoute'));
app.use('/api', require('./pricePredict'));
app.use('/api', require('./routes/profile'));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`port is runnin on ${PORT}`);
});
