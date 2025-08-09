const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../modules/User');

const SECRET_KEY = process.env.SECRET_KEY;

router.post('/log', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ ok: false, message: "Missing email or password" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ ok: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ ok: false, message: "Incorrect password" });
    }

    const token = jwt.sign({ id: user._id }, SECRET_KEY);
    res.json({ ok: true, message: "Login successful", token });

  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ ok: false, message: "Something went wrong" });
  }
});

module.exports = router;
