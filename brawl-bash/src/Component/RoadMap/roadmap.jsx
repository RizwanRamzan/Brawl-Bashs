import React from "react";
import "../About/about.css";
import "./roadMap.css"
import AboutCard from "../About/aboutCard";
import Fade from "react-reveal/Fade";
import Bounce from 'react-reveal/Bounce';




export default function RoadMap() {
  return (
      <>
   <div
      id="about"
      style={{
        display: "flex",
        marginLeft:50,
        marginRight:50
      }}
    >
      <div id="aboutContainer">
        <Fade left>
          <AboutCard />
        </Fade>
        <Fade top effect="fadeInUp">
          <AboutCard color="#EDB60D" margin="10px" />
        </Fade>

        <Fade right>
          <AboutCard />
        </Fade>
      </div>
    </div>
    
    <div style={{  marginTop: "100px" }}>
        <div style={{height: "164px",float: "right",marginLeft: "50px",position:"relative"}}>
          <img src="/cloud.svg" width="100%" />
        </div>
        <div className="brawlBashBox">
            <div style={{position:"absolute"}}>
            <img src="/Group 444.svg"/>
            </div>
            <div
            style={{
            height: "164px",
            position:"absolute",
            left:0
          }}
          >
            <img src="/cloud.svg" width="100%" />
          </div>
            <div
              style={{
              height: "164px",
              position:"absolute",
              right:100
            }}
            >
              <img src="/image 11.svg" width="100%" />
            </div>
            <div className="brawlBashInnerBox">
              <div className="brawlBashInnerBox1">
                <Bounce duration={1000} left>
                <p className="paragraph"> <b className="brawlBashHeading" >BRAWL BASH</b> is aboutdolor sithh 
                  vamet, consectetur adipiscing  elit.hh
                  Nam venenatis ultrices l bero, sedhjv 
                  h9scelerisque nisl. Nulla facilisi. dolo
                  sit amet, consectetur adipiscing  eli
                  Nam venenatis ultrices l bero, sed 
                  scelerisque nisl. Nulla facilisi. dol
                  sit amet, consectetur adipiscing  
                  Nam venenatis ultrices l bero, s
                  elerisque nisl. Nulla facilisi. dol
                  sit amet, consectetur adipisc
                  Nam venenatis
                </p> 
                </Bounce>
              </div>
            </div>
        </div>
          {/* <div
            style={{
            height: "164px",
            float: "right",
          }}
          >
            <img src="/cloud.svg" width="100%" />
          </div> */}
      </div>
    </>
  );
}
