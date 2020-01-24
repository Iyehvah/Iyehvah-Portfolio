import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import "../src/App.css"

const  App = () => {

  return (
   <div>
     <Navigation />
     <Home />
   </div>
  );
}

export default App;
