const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/user'); // Make sure user.js model exists

// ✅ GET /api/user/dashboard — return dynamic user data
router.get('/dashboard', authMiddleware, async (req, res) => {
  try {
    // req.user.id was set by authMiddleware (decoded from JWT)
    const user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    // Return the actual user's data
    res.json({
      name: user.name,
      quizProgress: user.quizProgress || 0,
      suggestions: user.suggestions || [],
      activity: user.activity || [],
      insights: user.insights || {}
    });

  } catch (err) {
    console.error("Dashboard error:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// ✅ POST /api/user/update-dashboard — save quiz results & insights
router.post('/update-dashboard', authMiddleware, async (req, res) => {
  const { quizProgress, suggestions, activity, insights } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (quizProgress !== undefined) user.quizProgress = quizProgress;
    if (suggestions) user.suggestions = suggestions;
    if (activity) user.activity = activity;
    if (insights) user.insights = insights;

    await user.save();

    res.json({ message: "Dashboard updated" });
  } catch (err) {
    console.error("Update dashboard error:", err);
    res.status(500).json({ message: "Failed to update dashboard" });
  }
});

// ✅ GET /api/user/profile — returns name, email, isAdmin
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    });
  } catch (err) {
    console.error("Profile fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
