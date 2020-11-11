// questionnaire.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionnaireSchema = new Schema({
    topic: {
        type: String,
        required: true
    },
    questions: [
        {
            question: String,
            answer_option: [{
                type: String
            }],
            correct_idx: {
                type: Number,
                required: true
            }
        }
    ]
});

const Questionnaire = mongoose.model('Questionnaire', questionnaireSchema);

module.exports = Questionnaire;