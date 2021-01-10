const Sequelize = require("sequelize");

const db = {};

// The cache configuration
var Redis = require("ioredis");
db.cache = Redis;

db.Sequelize = Sequelize;
db.Op = Sequelize.Op;
db.sequelize = require("../db");
db.models = require("./models");

//relations
db.models.bills.hasMany(db.models.particulars, { foreignKey: 'billId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
db.models.particulars.belongsTo(db.models.bills);

module.exports = db;
