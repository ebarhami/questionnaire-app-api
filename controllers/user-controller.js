const User = require('../models/user');

module.exports = {
    findAll: function (req, res) {
        User.find(req.query)
            .then(users => res.json(users))
            .catch(err => res.status(400).json(err));
    },
    findById: function (req, res) {
        User.findById(req.params.id)
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err));
    },
    create: function (req, res) {
        User.create(req.body)
            .then(newUser => res.json(newUser))
            .catch(err => res.status(400).json(err));
    },
};