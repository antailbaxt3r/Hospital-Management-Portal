import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

export default function Login() {
	return (
		<div>
			<Navbar />
			<Header />
			<div
				className="font-poppins"
				style={{ textAlign: "center", height: "50vh", background: "#fff", paddingTop: "40px" }}
			>
				<h3 className="font-50 font-weight-900">Login</h3>
				<div className="col-lg-4 mx-auto col-md-8 col-12">
					<input
						className="form-control form-control-lg mb-3"
						type="text"
						placeholder="Username"
						aria-label=".form-control-lg example"
					></input>
					<input
						className="form-control form-control-lg mb-3"
						type="text"
						placeholder="Password"
						aria-label=".form-control-lg example"
					></input>
					<button className="btn btn-primary px-5 font-weight-900">Login</button>
				</div>
			</div>
		</div>
	);
}
