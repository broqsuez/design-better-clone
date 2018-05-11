import React from "react";
import './NavBar.css';
import owlhead from "../../static/owlhead.PNG";

const styles = {
  nav: {
      height: "15vh",
      display: "flex",
    justifyContent: "space-between"
      },
    img: {
      width: "40px"
    },
    logoType: {
      marginLeft: "5px"
    }
  };

export default () => (
  <nav style={styles.nav}>
  <div className="masthead">
    <img src={owlhead} alt="logo" />
    <h1 className="logoType">DesignBetter.co</h1>
  </div>
    <ul className="links-container">
      <li className="link">BOOKS</li>
      <li className="link">PODCAST</li>
      <li className="link">WORKSHOPS</li>
      <li className="link">CONVERSATIONS</li>
      </ul>

      <div className="subscribe">
      <button className="myButton">SUBSCRIBE</button>
      </div>
   
  </nav>
);
