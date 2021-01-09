const { Particulars } = require("./particular");

const db = {};

db.bills = require("./bill").Bills;
db.particulars = require("./particular").Particulars;

module.exports = db;