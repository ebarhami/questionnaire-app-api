const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const standingsSchema = new Schema({
    questionnaire: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    answers: [{
        type: String
    }],
});

const Standings = mongoose.model('Standings', standingsSchema);

module.exports = Standings;