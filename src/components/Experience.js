import React from "react";

const Experience = () => {
  return (
    <div className="container">
      <h2>What I Know</h2>
      <div className="xp-container">
        <div className="box box1">
          <h4>HTML5</h4>
          <ul>
            <li>Semantic HTML Markup</li>
            <li>Inheritance and Nesting</li>
          </ul>
        </div>

        <div className="box box2">
          <h4>CSS3</h4>
          <ul>
            <li>Flex-box</li>
            <li>Media Queries</li>
            <li>Basic Styling Methods</li>
          </ul>
        </div>

        <div className="box box3">
          <h4>Javascript</h4>
          <ul>
            <li>Array Methods</li>
            <li>Constructors/Classes</li>
            <li>For Loops</li>
          </ul>
        </div>

        <div className="box box4">
          <h4>React</h4>
          <ul>
            <li>Components</li>
            <li>State Management</li>
            <li>Props</li>
            <li>Making Axios Calls via GET/PUT/POST/DELETE</li>
          </ul>
        </div>

        <div className="box box5">
          <h4>Context API</h4>
          <ul>
            <li>Provide data via Prodiver</li>
          </ul>
        </div>

        <div className="box box6">
          <h4>Redux</h4>
          <ul>
            <li>Actions</li>
            <li>Reducers</li>
          </ul>
        </div>
      </div>
      <div className="i-can-provide">
        <h2>What I Can Provide</h2>
        <div className="provideContainer">
          <p>For those looking for landing pages, single page website, and multipage websites for your growing business or if you're just looking to have your own website you have come to the right place.</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
