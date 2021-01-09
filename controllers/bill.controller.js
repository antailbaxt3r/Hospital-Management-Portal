const db = require("../db/models/db");
const config = require("../config/config");
const pdf = require('pdf-creator-node');
var fs = require('fs');

module.exports.getBills = async (req, res) => {
    try {
        const bills = await db.models.bills.findAll({
            include : [
                {
                    model : db.models.particulars
                }
            ]
        })
        res.status(200).json({
            success: true,
            bills
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

module.exports.getBill = async (req, res) => {
    try {
        const bill = await db.models.bills.findOne({
            where : { id : req.params.id },
            include : [
                {
                    model : db.models.particulars
                }
            ]
        })
        if (bill) {
            res.status(200).json({
                success: true,
                bills
            })
        } else {
            res.status(404).send({
                success: false,
                message: "Not Found",
                error: "'id' does not exist",
            });
        }
    } catch (e) {
		console.log(e);
		res.status(500).send({
			success: false,
			message: "Internal Server Error",
			error: e.message,
		});
	}
}

module.exports.addBill = async (req, res) => {
    try {
        const new_bill = {
            ipd_no: req.body.ipd_no,
            bill_no: req.body.bill_no,
            bill_date: req.body.bill_date,
            patient_name: req.body.patient_name,
            contact_no: req.body.contact_no,
            address: req.body.address,
            age: req.body.age,
            sex: req.body.sex,
            doctor: req.body.doctor,
            discharge_type: req.body.discharge_type,
            dept: req.body.dept,
            admission_date: req.body.admission_date,
            discharge_date: req.body.discharge_date,
            payment_method: req.body.payment_method,
        }
        const bill = await db.models.bills.create(new_bill)
        res.status(200).json({
            success: true,
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

module.exports.addP = async (req, res) => {
    try {
        const new_p = {
            sr : req.body.sr,
            details : req.body.details,
            rate : req.body.rate,
            qty : req.body.qty,
            net_amount : req.body.net_amount,
        }
        const p = await db.models.particulars.create(new_p)
        res.status(200).json({
            success: true,
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

module.exports.createBillPdf = async (req, res) => {
    try {

    } catch (e) {
		console.log(e);
		res.status(500).send({
			success: false,
			message: "Internal Server Error",
			error: e.message,
		});
	}
}