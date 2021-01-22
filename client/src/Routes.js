import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import AddPatient from "./Views/AddPatient";
import Discharge from "./Views/Discharge";
import Login from "./Views/Login";
import Patients from "./Views/Patients";
import Reciepts from "./Views/Reciepts";

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<App />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/patient">
					<Patients />
				</Route>
				<Route path="/reciepts">
					<Reciepts />
				</Route>
				<Route path="/discharge">
					<Discharge />
				</Route>
				<Route path="/addPatient">
					<AddPatient />
				</Route>
			</Switch>
		</Router>
	);
}
