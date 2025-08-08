// backend/index.js
const express = require("express");
const router = express.Router();
const cropData = require("./cropSuggestions");

router.post("/getSuggestions", (req, res) => {
  const { crop, startDate } = req.body;

  const today = new Date();
  const start = new Date(startDate);
  const daysPassed = Math.floor((today - start) / (1000 * 60 * 60 * 24));

  const cropKey = crop.trim().toLowerCase();
  const cropInfo = cropData[cropKey];

  if (!cropInfo) {
    return res.status(404).json({ message: "Crop not found" });
  }

  const matched = cropInfo.suggestions.filter(
  (s) => s.days[0] <= daysPassed
);



  res.json({
    crop: cropKey,
    daysPassed,
    suggestions: matched,
  });
});



module.exports = router;
