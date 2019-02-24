const express = require('express');
const router = express.Router()


router.use('/auth', require('./auth') );
router.use('/signatories', require('./signatories'))
router.use('/vendors', require('./vendors'))
router.use('/payments', require('./payments'))
router.use('/meta', require('./meta'))

module.exports = router;