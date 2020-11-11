const Standings = require('../models/standings');
const User = require('../models/user');
const Questionnaire = require('../models/questionnaire');

module.exports = {
    findAll: function (req, res) {
        Standings.find(req.query)
            .then(standings => res.json(standings))
            .catch(err => res.status(400).json(err));
    },
    findById: function (req, res) {
        Standings.findById(req.params.id)
            .then(standings => res.json(standings))
            .catch(err => res.status(400).json(err));
    },
    create: function (req, res) {
        Standings.create(req.body)
            .then(newStandings => res.json(newStandings))
            .catch(err => res.status(400).json(err));
    },
    answerQuestion: async function (req, res) {
        const user = await User.findById(req.body.user);
        const questionnaire = await Questionnaire.findById(req.body.questionnaire);
        const answers = req.body.answers;

        var right_answers = [];
        questionnaire.questions.forEach(function (question) {
            right_answers.push(question.correct_idx);
        });

        var score = 0;
        for (var i = 0; i < answers.length; i++) {
            if (answers[i] == right_answers[i]) {
                score++;
            }
        }

        const newStandings = new Standings({ 
            questionnaire: questionnaire.id, 
            user: user.username, 
            score: score,
            answers: answers}); 
        newStandings.save()
            .then(() => res.json(newStandings))
            .catch(err => res.status(400).json({ Error: err }));
    }
};
