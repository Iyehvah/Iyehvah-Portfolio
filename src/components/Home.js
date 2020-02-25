import React from 'react';
import profpic from "../images/profpic.PNG";

const Home = () => {
    return (
        <div className="home-container">
                <span className="image fit"><img className="hvr-grow" src={profpic} /></span>
                <div className="headline"><h3>Front-End Web Developer looking to better the world one step at a time.</h3></div>
        </div>
    )
}

export default Home;