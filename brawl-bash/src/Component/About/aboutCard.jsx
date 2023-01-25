import React from "react";

export default function AboutCard(props) {
  const color = props.color || "#343c51";
  const marginRight = props.margin || "0px";
  return (
    <div className="cardContainer" style={{ marginRight }}>
      <div className="card" style={{ backgroundColor: color }}>
        <div className="container">
          <div
            className="background"
          >
            <center style={{marginLeft:25,marginRight:25}}>
                <img src="/pinned.svg" />
              <h2 className="textHeadingStyle">LOREM IPSUM</h2>
              <div className="infinity" />
              <p className="textStyle">
                dolor sit <br />
                amet, consectetur adipis cing elit. Nam venenatis ultrices l
                bero, sed scelerisque nisl. Nulla facilisi.
              </p>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
