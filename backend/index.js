const express = require("express");
const cors = require("cors");
const app = express();
const router=express.Router();

const cropData = require("./cropSuggestions");

app.use(cors());
app.use(express.json());

router.post("/",(req, res) => {
  const { crop, startDate } = req.body;
  const today = new Date();
  const start = new Date(startDate);
  const daysPassed = Math.floor((today - start) / (1000 * 60 * 60 * 24));

  const cropInfo = cropData[crop];
  if (!cropInfo) return res.status(404).json({ message: "Crop not found" });

  const matched = cropInfo.suggestions.filter(
    (s) => daysPassed >= s.days[0] && daysPassed <= s.days[1]
  );

  res.json({
    crop,
    daysPassed,
    suggestions: matched
  });
});
module.exports=router