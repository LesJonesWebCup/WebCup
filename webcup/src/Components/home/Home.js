import Navbar from "../navbar/Navbar";
import Intro from "../intro/intro";
import React from "react";
import Title from "../title/Title";
import Description from "../description/Description";
import Onirix from "../onirix/Onirix";
import Footer from "../footer/Footer"
import "./Home.css"
import Form from "../form/Form";

function Home() {
    return(
	<div className="holster">
	    <Navbar />
		<Title />
		<Intro />
		<Description />
		<Onirix />
		<Form />
		<Footer />
	</div>
    )
}

export default Home;
