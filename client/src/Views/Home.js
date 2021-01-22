import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import discharge from "../Images/discgharge.svg";
import patient from "../Images/patient.svg";
import reciept from "../Images/reciept.svg";
export default function Home() {
	return (
		<>
			<Navbar
				btns={[
					{ name: "Patients", link: "patient" },
					{ name: "Discharge", link: "discharge" },
					{ name: "Reciepts", link: "reciepts" },
				]}
			/>
			<Header />
			<div className="row mx-0" style={{ justifyContent: "space-between", padding: "0 6rem" }}>
				<a href="/patient" className="col-md-3 bg-white">
					<img alt="" className="img-main-page" src={patient} />
				</a>
				<a href="/discharge" className="col-md-3 bg-white">
					<img alt="" className="img-main-page" src={discharge} />
				</a>
				<a href="/reciepts" className="col-md-3 bg-white">
					<img alt="" className="img-main-page" src={reciept} />
				</a>
			</div>
		</>
	);
}
