const router = require('express').Router();
const userController = require('../controllers/user-controller');

router
    .route('/')
    .get(userController.findAll)
    .post(userController.create);

router
    .route('/:id')
    .get(userController.findById);

module.exports = router;