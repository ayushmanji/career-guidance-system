const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  question: String,
  options: [
    {
      text: String,
      description: String,
      category: String
    }
  ],
  correct: { type: String, default: null },
  category: String
});

module.exports = mongoose.model('Quiz', quizSchema); // ✅ This line is crucial!
