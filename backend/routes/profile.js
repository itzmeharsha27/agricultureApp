const express = require('express');
const router = express.Router();
const User = require('../modules/User');
const authenticate = require('../middleware/auth');

router.post('/save-profile', authenticate, async (req, res) => {
  const userId = req.user.id;
  const profile = req.body;

  try {
    await User.findByIdAndUpdate(userId, { profile });
    res.json({ success: true, message: "Profile saved" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.get('/get-profile', authenticate, async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await User.findById(userId).select('profile name');
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

module.exports = router;
