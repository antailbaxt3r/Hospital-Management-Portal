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
        sn : {
            type: DataTypes.BIGINT,
        },
        detail : {
            type: DataTypes.STRING,
        },
        rate : {
            type: DataTypes.BIGINT,
        },
        qty : {
            type: DataTypes.BIGINT,
        },
        net : {
            type: DataTypes.BIGINT,
        }
	},
	{
		underscored: true,
	}
);