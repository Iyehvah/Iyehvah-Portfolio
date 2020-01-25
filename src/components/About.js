import React from "react";
import ProfilePicture from "../images/Prof-Pic2.jpg"

export default function About(){
    return (
        <div className="about-container">
            <span className="image fit about-img"><img className="hvr-grow" src={ProfilePicture} /></span>
            <h4>About me</h4>
            <p>Robert here, I was born in Las Vegas, Nevada and now reside in Nashville, Tennessee. I'm a full-stack web developer student at Lambda School with an ambition to use my acquired skills to better a company and the world. I'm a humanitarian at heart and enthusiastic for helping animals, humans, and the earth. I'm a reliable 23 year old with strong initiative, communication skills and would make a great addition to any team.</p>
        </div>
    )
}
