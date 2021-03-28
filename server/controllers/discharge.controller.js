const db = require("../db/models/db");
const config = require("../config/config");
const pdf = require('pdf-creator-node');
var fs = require('fs');
const generateDischarge = require('../utils/generate_discharge.js')

module.exports.generateDischarge = async (req, res) => {
    try {
        console.log("Generating...")
        const data = req.body
        await generateDischarge(data).then(file => {
            console.log(file)
            res.download(file)
            // res.status(200).send({
            //     success: true,
            //     message: "Generated successfully"
            // })
        })
        
    } catch (e) {
		console.log(e);
		res.status(500).send({
			success: false,
			message: "Internal Server Error",
			error: e.message,
		});
	}
}