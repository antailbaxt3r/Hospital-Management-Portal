var express = require('express');
var router = express.Router();
var discharges = require('../controllers/discharge.controller.js');

router.post('/generate', discharges.generateDischarge)
router.get('/fetch/:file', discharges.fetchFile)

module.exports = router;