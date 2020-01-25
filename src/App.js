import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Experience from "./components/Experience";
import About from "./components/About";
import { Route, Link } from "react-router-dom";
import "../src/App.css"

const  App = () => {

  return (
   <div>
     <Navigation />
     <Route exact path="/" component={Home}/>
     <Route exact path="/" component={Experience} />
     <Route path="/about" component={About}/>
   </div>
  );
}

export default App;
