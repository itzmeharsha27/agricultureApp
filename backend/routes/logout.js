const express = require('express');
const router = express.Router();

router.post('/logout', (req, res) => {
  // Client handles token deletion; server doesn't store token
  res.json({ success: true, message: "Logged out successfully" });
});

module.exports = router;
