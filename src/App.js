import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";

function App() {
	return (
		<div className="App">
			<Switch>
				{" "}
				<Route exact path="/" component={Home} />
			</Switch>
		</div>
	);
}

export default App;
