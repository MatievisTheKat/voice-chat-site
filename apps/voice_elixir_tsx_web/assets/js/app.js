import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./react/App";
import "phoenix_html";

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
