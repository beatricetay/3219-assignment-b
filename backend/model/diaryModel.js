var mongoose = require('mongoose');

const weather = {
    SUNNY: 'sunny',
    RAINY: 'rainy',
    CLOUDY: 'cloudy'
}

const weatherTypes = [weather.SUNNY, weather.RAINY, weather.CLOUDY];

// Setup schema
var diarySchema = mongoose.Schema({
    weather: {
        type: String,
        enum: weatherTypes,
        required: true
    },
    location: {
        type: String,
        default: "Singapore"
    },
    message: {
        type: String,
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
