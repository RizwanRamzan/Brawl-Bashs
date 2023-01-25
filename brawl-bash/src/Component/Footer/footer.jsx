import React from "react";
import Bounce from "react-reveal/Bounce";
import "./footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div id="aboutFooterContainer">
        <div className="footerContainer">
          <div className="container">
            <center>
              <Bounce duration={2000} left>
                <div className="farmer">FARMER</div>
              </Bounce>
              <div className="joinOurDiscard">
                <img src="/discord icon_1.svg" style={{ marginTop: 40 }} />
                <Bounce duration={2000} left>
                  JOIN OUR DISCORD NOW
                </Bounce>
              </div>
            </center>
          </div>
        </div>
        <div className="center">
          <div id="footerDiv">
            <img src="/logo.svg" className="baba" />
          </div>
        </div>
        <div className="footerContainer">
          <div className="container">
            <center>
              <Bounce duration={2000} right>
                <div
                  className="farmer"
                  style={{ color: "white", fontSize: 30, marginTop: 50 }}
                >
                  SUBSCRIBE TO OUR NEWS LETTER
                </div>
              </Bounce>
              <input
                type="text"
                placeholder="Please Enter Your Email"
                className="input"
              />
              <Bounce duration={2000} right>
                <div className="subcribeButton">SUBCRIBE</div>
              </Bounce>
            </center>
          </div>
        </div>
      </div>
      <div className="center" style={{ marginTop: 150 }}>
        <div style={{ width: "85%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexFlow: "wrap",
            }}
          >
            <div className="parallelogram1">
              <a href="#home"> HOME</a>
            </div>
            <div className="parallelogram1">
              <a href="#about">ABOUT</a>
            </div>
            <div className="parallelogram1">
              <a href="#tekonomics"> TEkENOMICS </a>
            </div>
            <div className="parallelogram1">
              <a href="#roadMap"> ROADMAP </a>
            </div>
            <div className="parallelogram1">
              <a href="#game"> GAME </a>
            </div>
            <div className="parallelogram1">
              <a href="#advisors"> ADVISORS </a>
            </div>
            <div className="parallelogram1">
              <a href="#footer"> PARTNERS </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
