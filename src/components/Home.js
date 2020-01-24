import React from 'react';
import ProfilePicture from "../images/Prof-Pic2.jpg"

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <span className="image fit"><img className="hvr-grow" src={ProfilePicture} /></span>
            </div>
        </div>
    )
}

export default Home;