import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <a href="/" className="atags">Home</a>
            <Link to="/about">
            <a className="atags">About</a>
            </Link>
            <a href="#" className="atags">Portfolio</a>
            <a href="#" className="atags">Contact</a>
        </div>
    )
}

export default Navigation;