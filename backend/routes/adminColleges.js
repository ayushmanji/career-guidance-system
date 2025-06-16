const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // ✅ import it
const isAdmin = require('../middleware/isAdminMiddleware');
const fs = require('fs');
const path = require('path');

const collegesPath = path.join(__dirname, '../data/colleges.json');

function getColleges() {
  return JSON.parse(fs.readFileSync(collegesPath, 'utf-8'));
}

function saveColleges(colleges) {
  fs.writeFileSync(collegesPath, JSON.stringify(colleges, null, 2));
}

// ✅ FIXED: authMiddleware comes before isAdmin
router.get('/', authMiddleware, isAdmin, (req, res) => {
  const colleges = getColleges();
  res.json(colleges);
});

router.post('/', authMiddleware, isAdmin, (req, res) => {
  const { name, location, field, students, faculty } = req.body;
  const colleges = getColleges();
  const newCollege = {
    name,
    location,
    field,
    students: parseInt(students || "0"),
    faculty: parseInt(faculty || "0")
  };

  colleges.push(newCollege);
  saveColleges(colleges);
  res.status(201).json({ message: "College added", college: newCollege });
});

router.put('/:index', authMiddleware, isAdmin, (req, res) => {
  const { index } = req.params;
  const { name, location, field, students, faculty } = req.body;
  const colleges = getColleges();

  if (!colleges[index]) return res.status(404).json({ message: "Not found" });

  colleges[index] = {
    name,
    location,
    field,
    students: parseInt(students || "0"),
    faculty: parseInt(faculty || "0")
  };

  saveColleges(colleges);
  res.json({ message: "College updated", college: colleges[index] });
});


router.delete('/:index', authMiddleware, isAdmin, (req, res) => {
  const { index } = req.params;
  const colleges = getColleges();

  if (!colleges[index]) return res.status(404).json({ message: "Not found" });

  const removed = colleges.splice(index, 1);
  saveColleges(colleges);
  res.json({ message: "College deleted", removed });
});

module.exports = router;
