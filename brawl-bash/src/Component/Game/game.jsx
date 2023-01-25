import React from "react";
import "./game.css";
import Flash from 'react-reveal/Flash';
import Bounce from 'react-reveal/Bounce';


export default function Game() {
  return (
    <div id="game">
      <div className="leftDiv">
        <img
          className="leftLogo"
          src="/logo.svg"
          />
          <Bounce duration={3000} left>
        <img className="boyLogo" src="/boy.svg"  />
        </Bounce>
      </div>

      <div className="rightDiv">
      <Bounce duration={3000} right>
        <img
          className="girlLogo"          
          src="/girl.svg"
        />
        </Bounce>
        <img
          className="rightLogo"
          src="/logo.svg"
        />
      </div>

      <img src="tile.svg" width="100%" style={{marginBottom:"-10px"}} />
      <img src="tile.svg" width="100%" />
      <div className="center">
        <div style={{width:"80%"}}>
      <div style={{display:"flex",justifyContent:"space-around",position:"relative",marginTop:-10}}>
        <img src="/Group 751.svg" />
        <img src="/Group 751.svg" />
      </div>
        </div>
      </div>
      <Flash>
      <div className="banner">
        <div className="banner1">
          <div className="banner3">
            <div className="bannerBackground" style={{ backgroundImage: "url(/banner1.svg)"}}>
            </div>
          </div>
        </div>
      </div>
      </Flash>
    </div>
  );
}
