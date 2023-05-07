import React, { useEffect } from "react";
import "./intro.css"
import Aos from "aos";
import "aos/dist/aos.css"

function Intro() {
    useEffect(() => {
        Aos.init({delay: 400});
    }, []);
    return (
        <div data-aos="fade-up" className="intro container">
            <div data-aos="fade-right" data-aos-duration="3000" className="slo-left">
                <h3>"Osez rêver, réalisez votre destinée."</h3>
                </div>
            <div data-aos="fade-left" data-aos-duration="3000" className="slo-right">
                <h3>"Fermez les yeux, ouvrez votre imagination, et réalisez vos rêves."</h3>
                </div>
        </div>
    );
}

export default Intro;