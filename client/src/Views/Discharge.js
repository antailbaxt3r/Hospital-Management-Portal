import React from "react";
import Navbar from "../Components/Navbar";

export default function Discharge() {
	return (
		<>
			<Navbar
				btns={[
					{ name: "Patients", link: "patient" },
					{ name: "Discharge", link: "discharge" },
					{ name: "Reciepts", link: "reciepts" },
				]}
			/>
			<form className="container text-center mb-5">
				<h1 className="font-weight-900 mt-1">Create Discharge</h1>
				<div className="row mx-0 text-left mb-5">
					<h2 className="col-12 mb-4 font-weight-900">Patient Details</h2>
					{[
						{ label: "Patient Name", name: "name" },
						{ label: "Age/Sex", name: "name" },
						{ label: "Contact No.", name: "name" },
						{ label: "Doctor 1", name: "name" },
						{ label: "Address", name: "name" },
						{ label: "Doctor 2", name: "name" },
						{ label: "Discharge Type", name: "name" },
						{ label: "Admisson Date", name: "name" },
						{ label: "Discharge Date", name: "name" },
					].map((i, k) => (
						<div className="col-lg-6 d-flex my-2">
							<label className="m-auto col-5 font-20 p-0">{i.label}</label>
							<input name={i.name} type="text" className="form-control col-7 font-20" />
						</div>
					))}
				</div>
				<div className="row mx-0 text-left">
					<h2 className="col-12 mb-4 font-weight-900">Table</h2>
					{[
						{ label: "DIAGNOSIS", name: "name" },
						{ label: "COMPLAINTS AT TIME OF ADMISSION REASON OF ADMISSION", name: "name" },
						{ label: "REASON OF ADMISSION", name: "name" },
						// { label: "INVESTIGATIONS OPERATIVE NOTES", name: "name" },
					].map((i, k) => (
						<div className="col-12 d-flex my-2">
							<label className="m-auto col-5 font-20 p-0">{i.label}</label>
							<input name={i.name} type="text" className="form-control col-7 my-auto font-20" />
						</div>
					))}
					<div className="col-12 d-flex mt-2 mb-5">
						<label className=" col-5 font-20 p-0">INVESTIGATIONS OPERATIVE NOTES</label>
						<textarea name="" rows="5" className="form-control col-7 my-auto font-20"></textarea>
					</div>
					<div className="col-12 d-flex mt-2 mb-5">
						<label className="m-auto col-5 font-20 p-0">CONDITION AT TIME OF DISCHARGE</label>
						<input name="" type="text" className="form-control col-7 my-auto font-20" />
					</div>
					<div className="col-12 d-flex mt-2 mb-5">
						<label className=" col-5 font-20 p-0"> ADVICE ON DISCHARGE</label>
						<textarea name="" rows="5" className="form-control col-7 my-auto font-20"></textarea>
					</div>
					<div className="col-12 d-flex mt-2 mb-5">
						<label className="m-auto col-5 font-20 p-0">PRECAUTIONS</label>
						<input name="" type="text" className="form-control col-7 my-auto font-20" />
					</div>
					<div className="col-12 d-flex mt-2 mb-5">
						<label className=" col-5 font-20 p-0">FOLLOW UP WHEN AND HOW TO OBTAIN URGENT CARE</label>
						<textarea name="" rows="5" className="form-control col-7 my-auto font-20"></textarea>
					</div>
					<div className="col-12 d-flex mt-2 mb-5">
						<label className=" col-5 font-20 p-0">ADVISE FOR BABY</label>
						<textarea name="" rows="3" className="form-control col-7 my-auto font-20"></textarea>
					</div>
				</div>
				<button className="btn btn-success btn-lg">Generate</button>
			</form>
		</>
	);
}
