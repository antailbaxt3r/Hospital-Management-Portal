var express = require('express');
var router = express.Router();
var discharges = require('../controllers/discharge.controller.js');

router.post('/generate', discharges.generateDischarge)

module.exports = router;