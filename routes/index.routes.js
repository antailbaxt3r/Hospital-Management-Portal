const express = require("express");
const router = express.Router();

//route imports
const billRouter = require('./bill.routes.js');

//routes inits
router.use('/bills', billRouter);

module.exports = router;