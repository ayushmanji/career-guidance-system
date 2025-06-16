const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isAdmin: {
    type: Boolean,
    default: false // Users are not admins unless explicitly set
  },
  quizProgress: Number,
  suggestions: [
    { title: String, match: Number }
  ],
  activity: [
    { text: String, time: String }
  ],
  insights: {
    Technology: Number,
    Creativity: Number,
    Leadership: Number,
    Analysis: Number
  }
});

module.exports = mongoose.model('User', userSchema);
