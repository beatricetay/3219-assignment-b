var mongoose = require('mongoose');

// Setup schema
var diarySchema = mongoose.Schema({
  weather: {
    type: String,
  },
  location: {
    type: String,
  },
  message: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

// Export Diary model
var DiaryEntry = module.exports = mongoose.model('diary', diarySchema);

module.exports.get = function(callback, limit) {
  DiaryEntry.find(callback).limit(limit);
}
