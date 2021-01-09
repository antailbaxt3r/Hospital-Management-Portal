const db = require("../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.Particulars = sequelize.define(
	"particulars",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        sr : {
            type: DataTypes.BIGINT,
        },
        details : {
            type: DataTypes.BIGINT,
        },
        rate : {
            type: DataTypes.BIGINT,
        },
        qty : {
            type: DataTypes.BIGINT,
        },
        net_amount : {
            type: DataTypes.BIGINT,
        }
	},
	{
		underscored: true,
	}
);