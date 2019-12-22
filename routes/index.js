const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
router.use('/api', apiRoutes);

const htmlRoutes = require('./htmlRoutes');
router.use('/', htmlRoutes)

module.exports = router;