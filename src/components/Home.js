import React from 'react';
import ProfilePicture from "../images/Prof-Pic2.jpg"

const Home = () => {
    return (
        <div className="home-container">
                <span className="image fit"><img className="hvr-grow" src={ProfilePicture} /></span>
                <div className="headline"><h3>Front-End Web Developer looking to better the world one step at a time.</h3></div>
        </div>
    )
}

export default Home;