const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  title: String,
  skills: [String],
  description: String,
  avg_salary: String,
  category: String  // ✅ Add this line
});

module.exports = mongoose.model('Career', careerSchema);
