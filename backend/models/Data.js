const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        min:6,
        max: 255
    },
    temperature: {
        type: String,
        required: true,
        min:1,
        max: 255
    },
    humidity: {
        type: String,
        required: true,
        min:1,
        max: 255
    },
    latitude: {
        type: String,
        required: true,
        min:1,
        max: 255
    },
    altitude: {
        type: String,
        required: true,
        min:1,
        max: 255
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Data', dataSchema);