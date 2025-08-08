// backend/routes/items.js
const express = require('express');
const router = express.Router();
const { detail } = require('../Data');

router.get('/items', (req, res) => {
  res.json(detail);
});

router.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = detail.find(c => c.id === id);
  if (item) res.json(item);
  else res.status(404).json({ message: 'Item not found' });
});

module.exports = router;
