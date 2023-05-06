import Navbar from "../navbar/Navbar";
import Intro from "../intro/intro";
import React from "react";
import Title from "../title/Title";
import Description from "../description/Description";
import Onirix from "../onirix/Onirix";
import "./Home.css"

function Home() {
    return(
	<div className="holster">
	    <Navbar />
		<Title />
		<Intro />
		<Description />
		<Onirix />
	</div>
    )
}

export default Home;
