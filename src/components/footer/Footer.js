import React from "react";
import './Footer.css';
import twitter from "../../static/twitter.png";
import Capture from "../.../static/Capture.png";                                                                                                    


export default () => (
    <footer>
    <div className="left">
        <p className="vertType">INVISION PRESENTS</p>
    </div>
    <div className="middle">
    <hr width="1" size="50" />
    <p className="scroll">Scroll</p>
    </div>

    <div className="right">
        <div className="twitter">
            <img src={twitter} alt="twitter" />
        </div>
    </div>
    </footer>
    
        
  );