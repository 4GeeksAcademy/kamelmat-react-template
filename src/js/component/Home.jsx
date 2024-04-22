import React from "react";

//include images into your bundle
import logo from "../../img/KM-2013-final-web.png";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Built from "./Built";
import Badges from "./Badges";
import { Login } from "./Login";

//create your first component

const Home = () => {
	return (
		<div className="text-center">
			<Navbar 
			title="Welcome"
			firsItem="Music"
			secondItem="Social"
			thirdItem="About Us"
			scroll1="Meet"
			scroll2="Vids"
			scroll3="contact"
			/>
		{/* 	<p>
				<img src={logo} className="img-fluid custom-logo-img"/>
			</p> */}
			<Login />
		{/* 	<Badges />
			<Jumbotron />
			<Built /> */}
			<p>
				Made by{" "}
				<a href="http://www.kamelmat.com">Kamelmat</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
