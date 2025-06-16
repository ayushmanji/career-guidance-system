const express = require('express');
const router = express.Router();
const Career = require('../models/Career'); // ✅ case-sensitive

router.get('/', async (req, res) => {
  try {
    const careers = await Career.find(); // ✅ should return seeded data
    res.json(careers);
  } catch (err) {
    console.error("Error fetching careers:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
