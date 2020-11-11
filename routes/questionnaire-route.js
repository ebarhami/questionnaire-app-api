const router = require('express').Router();
const questionnaireController = require('../controllers/questionnaire-controller');

router
    .route('/')
    .get(questionnaireController.findAll)
    .post(questionnaireController.create);

router
    .route('/:id')
    .get(questionnaireController.findById)
    .delete(questionnaireController.remove);

module.exports = router;