import React from "react";
import ProfilePicture from "../images/Prof-Pic2.jpg"

export default function About(){
    return (
        <div className="about-container">
            <span className="image fit about-img"><img className="hvr-grow" src={ProfilePicture} /></span>
            <h4>About me</h4>
            <p>Robert here, I was born in Las Vegas, Nevada and now reside in Nashville, Tennessee. I'm a Full-Stack Web Developer student at Lambda School with an ambition to use my acquired skills to better a company and the world. I'm a humanitarian at heart and enthusiastic for helping animals, humans, and the earth. I'm a reliable 23 year old with strong initiative, communication skills and would make a great addition to any team.</p>
            <p>People would ask me what I wanted to be when I grew up. By the time I hit 22 this question became irrelevant and I was becoming what my currect occupation was. This scared me to death as I was in a field of work I didnt thoroughly enjoy. I never would of thought I'd find my interest in becoming a developer. I never knew a thing about it. Im so glad I found Lambda because if it hadnt been for them id still be stuck in the same place searching for my niche in life.</p>
        </div>
    )
}
