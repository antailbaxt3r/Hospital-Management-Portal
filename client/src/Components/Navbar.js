import React from "react";
import logo from "../Logo.svg";
export default function Navbar(props) {
	return (
		<>
			<nav className="navbar navbar-light p-0">
				<div className="d-flex col-12 pr-0">
					<div className="col-3 p-2">
						<a className="navbar-brand" href="/">
							<img src={logo} width="150" height="150" className="d-inline-block align-top" alt="" />
						</a>
					</div>
					<div className="col-9 p-0">
						<div
							className="col-12"
							style={{ height: "50%", background: "#0056D1", borderRadius: "0px 0px 0px 20px" }}
						></div>
						{props.btns && (
							<div className="col-12" style={{ height: "50%" }}>
								<div className="nav-btn">
									{props.btns.map((i, k) => (
										<a href={i.link} className="btn btn-success btn-lg mx-2">
											{i.name}
										</a>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</nav>
		</>
	);
}
