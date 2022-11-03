const router = require('express').Router();

router.use('/estate', require('./api/estate'));

module.exports = router;