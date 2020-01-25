import React from 'react';
import ProfilePicture from "../images/Prof-Pic2.jpg"

const Home = () => {
    return (
        <div className="container">
                <span className="image fit"><img className="hvr-grow" src={ProfilePicture} /></span>
        </div>
    )
}

export default Home;