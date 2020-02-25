import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Experience from "./components/Experience";
import About from "./components/About";
import Footer from "./components/Footer";
import { Route, Link } from "react-router-dom";
import "../src/App.css"

const  App = () => {

  return (
   <div className="everything">
     <Navigation />
     <Route exact path="/" component={Home}/>
     <Route exact path="/" component={Experience} />
     <Route path="/about" component={About}/>
     <Footer />
   </div>
  );
}

export default App;
