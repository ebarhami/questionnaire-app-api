const router = require('express').Router();
const standingsController = require('../controllers/standings-controller');

router
    .route('/')
    .get(standingsController.findAll)
    .post(standingsController.create);

router
    .route('/answer-question')
    .post(standingsController.answerQuestion);

router
    .route('/:id')
    .get(standingsController.findById);

module.exports = router;
