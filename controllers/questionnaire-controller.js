const Questionnaire = require('../models/questionnaire');

module.exports = {
    findAll: function (req, res) {
        Questionnaire.find(req.query)
            .then(questionnaires => res.json(questionnaires))
            .catch(err => res.status(400).json(err));
    },
    findById: function (req, res) {
        Questionnaire.findById(req.params.id)
            .then(questionnaire => res.json(questionnaire))
            .catch(err => res.status(400).json(err));
    },
    create: function (req, res) {
        Questionnaire.create(req.body)
            .then(newQuestionnaire => res.json(newQuestionnaire))
            .catch(err => res.status(400).json(err));
    },
    remove: function (req, res) {
        Questionnaire.findById({ _id: req.params.id })
            .then(questionnaire => questionnaire.remove())
            .then(questionnaires => res.json(questionnaires))
            .catch(err => res.status(400).json(err));
    }
};
