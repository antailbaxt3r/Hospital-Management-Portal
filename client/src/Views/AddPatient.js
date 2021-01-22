import React from "react";
import Navbar from "../Components/Navbar";

export default function AddPatient() {
	return (
		<>
			<Navbar
				btns={[
					{ name: "Patients", link: "patient" },
					{ name: "Discharge", link: "discharge" },
					{ name: "Reciepts", link: "reciepts" },
				]}
			/>
			<div className="container">
				<h1 className="mt-5 mb-4 font-60">Add Patient</h1>
				<form className="row mx-0" style={{ justifyContent: "space-between" }}>
					<input type="text" className="form-control add-patient-form mb-3 col-7" placeholder="Name" />
					<input type="text" className="form-control add-patient-form mb-3 col-2" placeholder="Sex" />
					<input type="text" className="form-control add-patient-form mb-3 col-2" placeholder="Age" />
					<input
						type="text"
						className="form-control add-patient-form mb-3 col-5"
						placeholder="Contact Number"
					/>
					<input
						type="text"
						className="form-control add-patient-form mb-3 col-3"
						placeholder="Admisson Date"
					/>
					<input
						type="text"
						className="form-control add-patient-form mb-3 col-3"
						placeholder="Discharge Date"
					/>
					<input type="text" className="form-control add-patient-form mb-3 col-12" placeholder="Address" />
					<div className="col-6 mt-5">
						<div className="d-flex my-3">
							<h4 className="my-auto mr-5">Upload Discharge</h4>
							<input type="file" id="file" placeholder="Address" />
							<label for="file" className="btn btn-primary my-auto ml-auto upload-btn">
								Upload
							</label>
						</div>
						<div className="d-flex">
							<h4 className="my-auto mr-5">Upload Reciept</h4>
							<input type="file" id="file" placeholder="Address" />
							<label for="file" className="btn btn-primary my-auto ml-auto upload-btn">
								Upload
							</label>
						</div>
					</div>
					<div className="col-4 d-flex">
						<button className="btn btn-success add-btn mt-auto ml-auto">Save</button>
					</div>
				</form>
			</div>
		</>
	);
}
