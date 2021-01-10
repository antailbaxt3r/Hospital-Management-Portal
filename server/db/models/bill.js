const db = require("../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.Bills = sequelize.define(
	"bills",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		ipd: {
			type: DataTypes.STRING
		},
		bill_no: {
			type: DataTypes.STRING,
		},
		bill_date: {
			type: DataTypes.STRING,
		},
		patient_name: {
			type: DataTypes.STRING
		},
        contact: {
            type: DataTypes.STRING,
	        },
        address: {
			type: DataTypes.STRING,
		},
		age: {
			type: DataTypes.BIGINT,
		},
		sex: {
			type: DataTypes.STRING,
        },
		doctor1: {
			type: DataTypes.STRING,
		},
		doctor2: {
			type: DataTypes.STRING,
		},
		discharge_type: {
			type: DataTypes.STRING,
		},
		dept: {
			type: DataTypes.STRING,
		},
		admission_date: {
			type: DataTypes.STRING,
		},
		discharge_date: {
			type: DataTypes.STRING,
		},
		payment_method: {
			type: DataTypes.STRING,
		},
		link: {
			type: DataTypes.STRING,
		},
		total_amount: {
			type: DataTypes.BIGINT,
		}
	},
	{
		underscored: true,
	}
);