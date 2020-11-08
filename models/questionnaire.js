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
            no: Number,
            question: String,
            answerOption: [{
                option: String
            }],
            correctIdx: {
                type: Number,
                required: true
            }
        }
    ]
});

const Questionnaire = mongoose.model('Questionnaire', questionnaireSchema);

module.exports = Questionnaire;