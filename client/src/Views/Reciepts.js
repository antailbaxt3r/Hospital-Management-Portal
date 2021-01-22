import React from "react";
import Navbar from "../Components/Navbar";

export default function Reciepts() {
	return (
		<>
			<Navbar
				btns={[
					{ name: "Patients", link: "patient" },
					{ name: "Discharge", link: "discharge" },
					{ name: "Reciepts", link: "reciepts" },
				]}
			/>
			<div className="container text-center">
				<h1 className="font-weight-900 mt-2 mb-4 d-flex col-12">
					<span className="mx-auto">Patient List</span>
					<a href="/addPatient" className="btn btn-success btn-lg add-btn">
						Add
					</a>
				</h1>
				<div className="d-flex justify-content-center">
					<input className="search form-control col-8" placeholder="Search" />
				</div>
				{[
					{
						patientName: "patientName",
						admissonDate: "admissonDate",
						dischargeDate: "dischargeDate",
						status: "status",
					},
					{
						patientName: "patientName",
						admissonDate: "admissonDate",
						dischargeDate: "dischargeDate",
						status: "status",
					},
					{
						patientName: "patientName",
						admissonDate: "admissonDate",
						dischargeDate: "dischargeDate",
						status: "status",
					},
					{
						patientName: "patientName",
						admissonDate: "admissonDate",
						dischargeDate: "dischargeDate",
						status: "status",
					},
				].map((i, k) => (
					<div className="d-flex patient-list">
						<div className="col-3">{i.patientName}</div>
						<div className="col-3">{i.admissonDate}</div>
						<div className="col-3">{i.dischargeDate}</div>
						<div className="col-3">{i.status}</div>
					</div>
				))}
			</div>
		</>
	);
}
