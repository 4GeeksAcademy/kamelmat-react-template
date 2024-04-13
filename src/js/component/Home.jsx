import React from "react";

//include images into your bundle
import logo from "../../img/KM-2013-final-web.png";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

//create your first component
const Home = () => {
/* 	const bodyStyle = {
        backgroundImage: <img src={logo}/>, 
		backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
		height: "100vh", 
	}; */
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
			<p>
				<img src={logo} className="img-fluid custom-logo-img"/>
			</p>
			<Jumbotron />
			<p>
				Made by{" "}
				<a href="http://www.kamelmat.com">Kamelmat</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
