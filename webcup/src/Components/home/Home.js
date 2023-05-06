import Navbar from "../navbar/Navbar";
import Intro from "../intro/intro";
import React from "react";
import Title from "../title/Title";
import "./Home.css"

function Home() {
    return(
	<div className="holster">
	    <Navbar />
		<Title />
		<Intro />
	</div>
    )
}

export default Home;
