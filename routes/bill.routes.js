var express = require('express');
var router = express.Router();
var bills = require('../controllers/bill.controller.js');

router.get('/get/all', bills.getBills)
router.get('/get', bills.getBill)
router.post('/addbill', bills.addBill)
router.post('/addp', bills.addP)

module.exports = router;