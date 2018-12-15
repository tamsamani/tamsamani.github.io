import React from "react";
import ReactDOM from "react-dom";
import Page from "./Modules/Page";

import "./styles.css";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Page name="main" />
			</div>
		);
	}
}

const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);
