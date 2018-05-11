import React from "react";
import './Hero.css';
import owlhead from "../../static/owlhead.PNG";

export default () => (
    <main>
        <div className="text-container">
        <img className="heroLogo" src={owlhead} alt="mainLogo"/>
        </div>
        <div className="blurb">
        <h1 className="heroText">Discover. Learn. Elevate.</h1>
        </div>
        <div className="mainCopy">
            <p className="heroCopy">Introducing the best practices, stories, and insights from the world's top design leaders. Loaded with in-depth books, podcasts and more, DesignBetter.Co is your essential guide to building remarkable products and teams.</p>
        </div>
        <div className="exploreBtn">
        <button className="explore">START EXPLORING</button>
        </div>
    </main>

    
        
  );
  