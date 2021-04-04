import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";

const fs = require("fs");

const multipara_template = require("../sample/multipara")
const iud_template = require("../sample/iud")
const ftp_template = require("../sample/ftp")

const url = "http://localhost:4193"

export default function Discharge() {

	const [formData, updateFormData] = useState({
		patient_name: "",
		age: '',
		sex: "",
		contact: "",
		doctor1: "",
		doctor2: "",
		address: "",
		admission_date: "",
		admission_time: "",
		discharge_type: "",
		discharge_date: "",
		discharge_time: "",
		diagnosis: "",
		complaints: "",
		reason_for_admission: "",
		investigations: "",
		treatment_given: "",
		condition: "",
		advice_on_discharge: "",
		precautions: "",
		follow_up: "",
		advice_for_baby: "",
		urgent_care: ""
	});

	const handleSubmit = e => {
		e.preventDefault();
		console.log(formData)
		generateDischarge()
	}

	const changeHandler = e => {
		const x = e.target.value;
		updateFormData({
			...formData,
			[e.target.name]: x
		})
	}

	const loadTemplate = template => {
		updateFormData({...template})
	}

	const generateDischarge = async () => {
		const req = {
			patient_name: formData.patient_name,
			age: formData.age,
			sex: formData.sex,
			contact: formData.contact,
			doctor1: formData.doctor1,
			doctor2: formData.doctor2,
			address: formData.address,
			admission_date: formData.admission_date,
			admission_time: formData.admission_time,
			discharge_type: formData.discharge_type,
			discharge_date: formData.discharge_date,
			discharge_time: formData.discharge_time,
			rows: {
				diagnosis: formData.diagnosis,
				complaints: formData.complaints,
				reason_for_admission: formData.reason_for_admission,
				investigations: formData.investigations,
				treatment_given: formData.treatment_given,
				condition: formData.condition,
				advice_on_discharge: formData.advice_on_discharge,
				precautions: formData.precautions,
				follow_up: formData.follow_up,
				advice_for_baby: formData.advice_for_baby,
				urgent_care: formData.urgent_care
			}
		}
		await axios.post(url + "/api/v1/discharges/generate", req).then(res => {
			const filename = res.data.file
			window.open(url + "/api/v1/discharges/fetch/" + filename);
		})
		.catch(err => {
			alert("Something went wrong!\nError details: " + err.message)
		});
	}

	return (
		<>
			<Navbar
				btns={[
					{ name: "Patients", link: "patient" },
					{ name: "Discharge", link: "discharge" },
					{ name: "Reciepts", link: "reciepts" },
				]}
			/>

			<div style={{display: "flex", justifyContent: "flex-end"}}>
				<button className="btn btn-success btn-lg" onClick={() => loadTemplate(multipara_template)} style={{margin: 20}}>Multipara</button>
				<button className="btn btn-success btn-lg" onClick={() => loadTemplate(ftp_template)} style={{margin: 20}}>FTP</button>
				<button className="btn btn-success btn-lg" onClick={() => loadTemplate(iud_template)} style={{margin: 20}}>IUD</button>
			</div>
			
			<form className="container text-center mb-5" onSubmit={handleSubmit}>
				<h1 className="font-weight-900 mt-1">Create Discharge</h1>
				<div className="row mx-0 text-left mb-5">
					<h2 className="col-12 mb-4 font-weight-900">Patient Details</h2>
					{[
						{ label: "Patient Name", name: "patient_name", value: formData.patient_name.toString() },
						{ label: "Age", name: "age", value: formData.age.toString() },
						{ label: "Sex", name: "sex", value: formData.sex.toString() },
						{ label: "Contact No.", name: "contact", value: formData.contact.toString() },
						{ label: "Doctor 1", name: "doctor1", value: formData.doctor1.toString() },
						{ label: "Address", name: "address", value: formData.address.toString() },
						{ label: "Doctor 2", name: "doctor2", value: formData.doctor2.toString() },
						{ label: "Discharge Type", name: "discharge_type", value: formData.discharge_type.toString() },
						{ label: "Admisson Date", name: "admission_date", value: formData.admission_date.toString() },
						{ label: "Admisson Time", name: "admission_time", value: formData.admission_time.toString() },
						{ label: "Discharge Date", name: "discharge_date", value: formData.discharge_date.toString() },
						{ label: "Discharge Time", name: "discharge_time", value: formData.discharge_time.toString() },
					].map((i, k) => (
						<div className="col-lg-6 d-flex my-2">
							<label className="m-auto col-5 font-20 p-0">{i.label}</label>
							<input name={i.name} onChange={changeHandler} value={i.value} type="text" className="form-control col-7 font-20" />
						</div>
					))}
				</div>
				<div className="row mx-0 text-left">
					<h2 className="col-12 mb-4 font-weight-900">Table</h2>
					{[
						{ label: "DIAGNOSIS", name: "diagnosis", value: formData.diagnosis.toString() },
						{ label: "COMPLAINTS AT TIME OF ADMISSION", name: "complaints", value: formData.complaints.toString() },
						{ label: "REASON OF ADMISSION", name: "reason_for_admission", value: formData.reason_for_admission.toString() },
						{ label: "INVESTIGATIONS OPERATIVE NOTES", name: "investigations", value: formData.investigations.toString() },
						// { label: "INVESTIGATIONS OPERATIVE NOTES", name: "name" },
					].map((i, k) => (
						<div className="col-12 d-flex my-2">
							<label className="m-auto col-5 font-20 p-0">{i.label}</label>
							<input name={i.name} value={i.value} onChange={changeHandler} type="text" className="form-control col-7 my-auto font-20" />
						</div>
					))}
					<div className="col-12 d-flex mt-2 mb-5">
						<label className=" col-5 font-20 p-0">TREATEMENT GIVEN</label>
						<textarea name="treatment_given" value={formData.treatment_given} onChange={changeHandler} rows="5" className="form-control col-7 my-auto font-20"></textarea>
					</div>
					<div className="col-12 d-flex mt-2 mb-5">
						<label className="m-auto col-5 font-20 p-0">CONDITION AT TIME OF DISCHARGE</label>
						<input name="condition" type="text" value={formData.condition} onChange={changeHandler} className="form-control col-7 my-auto font-20" />
					</div>
					<div className="col-12 d-flex mt-2 mb-5">
						<label className=" col-5 font-20 p-0"> ADVICE ON DISCHARGE</label>
						<textarea name="advice_on_discharge" value={formData.advice_on_discharge} onChange={changeHandler} rows="5" className="form-control col-7 my-auto font-20"></textarea>
					</div>
					<div className="col-12 d-flex mt-2 mb-5">
						<label className="m-auto col-5 font-20 p-0">PRECAUTIONS</label>
						<textarea name="precautions" value={formData.precautions} rows="3" type="text" className="form-control col-7 my-auto font-20" />
					</div>
					<div className="col-12 d-flex mt-2 mb-5">
						<label className=" col-5 font-20 p-0">FOLLOW UP</label>
						<textarea name="follow_up" value={formData.follow_up} onChange={changeHandler} rows="5" className="form-control col-7 my-auto font-20"></textarea>
					</div>
					<div className="col-12 d-flex mt-2 mb-5">
						<label className=" col-5 font-20 p-0">WHEN AND HOW TO OBTAIN URGENT CARE</label>
						<textarea name="urgent_care" value={formData.urgent_care} onChange={changeHandler} rows="5" className="form-control col-7 my-auto font-20"></textarea>
					</div>
					<div className="col-12 d-flex mt-2 mb-5">
						<label className=" col-5 font-20 p-0">ADVISE FOR BABY</label>
						<textarea name="advice_for_baby" value={formData.advice_for_baby} onChange={changeHandler} rows="7" className="form-control col-7 my-auto font-20"></textarea>
					</div>
				</div>
				<button className="btn btn-success btn-lg">Generate</button>
			</form>
		</>
	);
}
