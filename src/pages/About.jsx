import React from "react";
import Me from '../media/ME.png'
import '../styles/about.css'


const About = ()=>{
    return(
        
        <div className="about-container">
            <div className="about-header">
                <h1>About</h1>
            </div>
            <div className="about-content">
                <div className="about-details">
                    <h2>Hello! I'm Dave </h2>
                </div>
                <div className="about-image">
                    <img src={Me} alt="" />
                </div>

            </div>

        </div>
    );
}
export default About;