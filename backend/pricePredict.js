// pricePredict.js
const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');
const path = require('path');

router.post('/predict-price', (req, res) => {
  const { current_month } = req.body;

  const pythonPath = path.join(
    'C:',
    'Users',
    'Dell',
    'AppData',
    'Local',
    'Programs',
    'Python',
    'Python313',
    'python.exe'
  );

  const scriptPath = path.join(__dirname, 'predict_price.py');
  const python = spawn(pythonPath, [scriptPath]);

  const input = JSON.stringify({ current_month });
  let output = '';

  python.stdout.on('data', (data) => {
    output += data.toString();
  });

  python.stderr.on('data', (err) => {
    console.error(`stderr: ${err}`);
  });

  python.on('close', (code) => {
    try {
      const result = JSON.parse(output);
      res.json(result);
    } catch (error) {
      console.error('Error parsing result:', error);
      res.status(500).json({ error: 'Prediction failed' });
    }
  });

  python.stdin.write(input);
  python.stdin.end();
});

module.exports = router;
