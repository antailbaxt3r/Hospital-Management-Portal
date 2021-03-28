const express = require("express");
const router = express.Router();

//route imports
const billRouter = require('./bill.routes.js');
const dischargeRouter = require('./discharge.routes.js');

//routes inits
router.use('/bills', billRouter);
router.use('/discharges', dischargeRouter);

module.exports = router;