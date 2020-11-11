const router = require('express').Router();
const userRoutes = require('./user-route');
const questionnaireRoutes = require('./questionnaire-route');
const standingsRoutes = require('./standings-route');

router.use('/users', userRoutes);
router.use('/questionnaire', questionnaireRoutes);
router.use('/standings', standingsRoutes);

module.exports = router;