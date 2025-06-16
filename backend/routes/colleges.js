const express = require('express');
const router = express.Router();
const colleges = require('../data/colleges.json');

// Keyword map to make matching easier
const FIELD_KEYWORDS = {
  ux: 'Design',
  designer: 'Design',
  engineering: 'Engineering',
  technology: 'Technology',
  developer: 'Technology',
  data: 'Technology',
  analyst: 'Technology',
  business: 'Business',
  marketing: 'Business',
  healthcare: 'Healthcare', // ✅ add this line
  nurse: 'Healthcare',
  medical: 'Healthcare'
};


router.get('/', (req, res) => {
  const { location = '', field = '' } = req.query;

  // Normalize
  const locationLower = location.toLowerCase();
  const fieldKeyword = FIELD_KEYWORDS[field.toLowerCase()] || field;

  const filtered = colleges.filter(c =>
    c.location.toLowerCase().includes(locationLower) &&
    c.field.toLowerCase().includes(fieldKeyword.toLowerCase())
  );

  res.json(filtered);
});

module.exports = router;
