import React from "react";
import M from "materialize-css";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

const footerLinks = {
	Main: "#main",
	About: "/about",
	MyBudget: "/mubudget",
	AuthoChoice: "/authorchoice"
};

export default class Page extends React.Component {
	render() {
		return (
			<div className="page contianer">
				<Header />
				<Main />
				<Footer links={footerLinks} />
			</div>
		);
	}
}
