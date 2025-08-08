const express = require('express');
const cors = require('cors');
const router = express.Router();

router.use(cors());
router.use(express.json());

const cropYields = {
  tomato:15000,
  Rice: 2500,
  Wheat: 2200,
  Maize: 2800,
  Cotton: 500,
  Sugarcane: 35000,
};

router.post('/predict', (req, res) => {
  const { crop, acres } = req.body;

  if (!crop || !acres || isNaN(acres)) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const predictedYield = parseFloat(acres) * cropYields[crop];
  res.json({ crop, acres, predictedYield });
});

module.exports = router;
