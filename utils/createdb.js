var db = require("../db/models/db");

async function public_force() {
	console.log("Public force executed");

	try {
		//Access Management
        await db.models.bills.create({});
        await db.models.particulars.create({ bill_id : 1})
        await db.models.particulars.create({ bill_id : 1})
        await db.models.particulars.create({ bill_id : 1})
	} catch (e) {
		console.log(e);
	}
}

async function main() {
	var schema = ["sequelize", true, public_force];

	console.log("Creating the tables");

	console.log(schema);
	public_ret = await db[schema[0]].sequelize.sync({ force: schema[1] });

	console.log(schema[0] + " created");
	if (schema[1]) {
		force_ret = await schema[2]();
		console.log(schema[0] + " force param executed " + force_ret);
	}
	console.log("\n\n\n\n\n");
	process.exit();
}

if (require.main == module) {
	main();
}
