const express = require('express');
const router = express.Router();
const User = require('../modules/User');


router.post('/save', async (req, res) => {
  const { email, selectedCrop, startDate } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.cropProgress) user.cropProgress = new Map();
    user.cropProgress.set(selectedCrop.toLowerCase(), { startDate });

    await user.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});



router.post('/load', async (req, res) => {
  const { email, selectedCrop } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const crop = selectedCrop.toLowerCase();
    const data = user.cropProgress?.get(crop);

    res.json({ startDate: data?.startDate || null });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});




module.exports = router;
