const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../modules/User');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  console.log('Received registration:', req.body);

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.json({ success: true, message: 'User registered successfully' });
  } catch (err) {
    console.error('🔥 Registration error:', err.message);
    res.status(500).json({ success: false, message: 'Something went wrong during registration' });
  }
});

module.exports = router;
