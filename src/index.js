import React from "react";
import ReactDOM from "react-dom";
import Page from "./Page";

import "./styles.css";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Page name="main" />
				<h1>Hello CodeSandbox</h1>
				<h2>Start editing to see some magic happen!</h2>
			</div>
		);
	}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
