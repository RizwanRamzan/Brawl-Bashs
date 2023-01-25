import React from "react";
import Fade from "react-reveal/Fade";
import "./about.css";
import Reveal from 'react-reveal/Reveal';
import AboutCard from "./aboutCard";

export default function About() {
  return (
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
  );
}
