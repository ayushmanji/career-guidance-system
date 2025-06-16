// backend/routes/quiz.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path'); // ✅ this is the correct built-in module

// GET /api/quiz – reads from quizzes.json
router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../data/quizzes.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("❌ Failed to load quiz data", err);
      return res.status(500).json({ error: "Failed to load quiz data" });
    }
    try {
      const parsed = JSON.parse(data);
      res.json(parsed);
    } catch (e) {
      console.error("❌ Invalid JSON in quizzes.json", e);
      res.status(500).json({ error: "Invalid JSON format in quizzes.json" });
    }
  });
});

module.exports = router;
