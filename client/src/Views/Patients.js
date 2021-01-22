import React from "react";
import Navbar from "../Components/Navbar";

export default function Patients() {
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
				<div className="mt-5 mb-4 d-flex">
					<h1 className="font-60">Patient Name</h1>
					<div className="ml-auto mb-auto">
						<button className="btn btn-success add-btn">Edit</button>
					</div>
				</div>
				<div className="row mx-0 col-8 p-0">
					<h3 className="font-weight-900 col-6 p-0">Age/Sex: </h3>
					<h3 className="col-6 p-0">23/Female</h3>
					<h3 className="font-weight-900 col-6 p-0">Contact: </h3>
					<h3 className="col-6 p-0">+91 931315556</h3>
					<h3 className="font-weight-900 col-6 p-0 mb-5">Address: </h3>
					<h3 className="col-6 p-0">xyz colony varanasi</h3>
					<h3 className="font-weight-900 col-6 p-0">Admisson Date: </h3>
					<h3 className="col-6 p-0">+91 931315556</h3>
					<h3 className="font-weight-900 col-6 p-0 mb-5">Discharge Date: </h3>
					<h3 className="col-6 p-0">+91 931315556</h3>
					<h3 className="font-weight-900 col-6 p-0">Discharge Document: </h3>
					<h3 className="col-6 p-0">
						<input type="file" id="file" placeholder="Address" />
						<label for="file" className="btn btn-primary my-auto ml-auto upload-btn">
							Upload
						</label>
					</h3>
					<h3 className="font-weight-900 col-6 p-0">Final Bill: </h3>
					<h3 className="col-6 p-0">
						<input type="file" id="file" placeholder="Address" />
						<label for="file" className="btn btn-primary my-auto ml-auto upload-btn">
							Upload
						</label>
					</h3>
				</div>
			</div>
		</>
	);
}
