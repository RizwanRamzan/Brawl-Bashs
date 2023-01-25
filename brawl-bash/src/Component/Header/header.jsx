import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useMediaQuery } from "react-responsive";
import "./header.css";
import Jump from "react-reveal/Jump";
import Spin from "react-reveal/Spin";
import { Affix } from "rsuite";

const Header = () => {
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const b = [
    "HOME",
    "ABOUT",
    "TEkENOMICS",
    "ROADMAP",
    "GAME",
    "ADVISORS",
    "PARTNERS",
  ];

  const list = (anchor) => (
    <Box
      sx={{
        width: 300,
        backgroundColor: "#ECB50C",
        height: "200%",
        cursor: "pointer",
      }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      onClose={toggleDrawer(anchor, false)}
    >
      <div className="crossButton">
        <Button>{<img src="/close_black_24dp.svg" />}</Button>
      </div>
      {b.map((item) => (
        <List>
          {[<div className="mobileParallelogram">{item}</div>, <Divider />].map(
            (text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      ))}
    </Box>
  );

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });

  return (
    // <div id="home">
    // {isTabletOrMobile ? (
    //   <div style={{ position: "absolute", right: "20px", top: "20px" }}>
    //     <React.Fragment key={"right"}>
    //       <div style={{ display: "flex", justifyContent: "end", zIndex: 1 }}>
    //         <Button onClick={toggleDrawer("right", true)}>
    //           {<img src="/menu_black_24dp.svg" />}
    //         </Button>
    //         <Drawer
    //           anchor={"right"}
    //           open={state["right"]}
    //           onClose={toggleDrawer("right", false)}
    //         >
    //           {list("right")}
    //         </Drawer>
    //       </div>
    //     </React.Fragment>
    //   </div>
    // ) : (
    //       <Affix>
    //     <Jump>
    //       <div>
    // <div className="miniImageLeft" style={{ zIndex: 1 }}>
    //   <img src="/Group 812.svg" />
    // </div>
    // <div className="miniImageRight" style={{ zIndex: 1 }}>
    //   <img src="/Group 812.svg" />
    // </div>
    //         <div className="header">
    //           <div
    //             style={{
    //               position: "absolute",
    //               display: "flex",
    //               flexDirection: "row",
    //               marginTop: "30px",
    //             }}
    //           >
    // <div className="parallelogram">
    //   <a href="#home">HOME</a>
    // </div>
    // <div className="parallelogram">
    //   <a href="#about">ABOUT</a>
    // </div>
    // <div className="parallelogram">
    //   <a href="#tekonomics">TEkENOMICS</a>
    // </div>
    // <div className="parallelogram">
    //   <a href="#roadmap">ROADMAP</a>
    // </div>
    // <div className="parallelogram">
    //   <a href="#game">GAME</a>
    // </div>
    // <div className="parallelogram">
    //   <a href="#advisors">ADVISORS</a>
    // </div>
    // <div className="parallelogram">
    //   <a href="#footer">PARTNERS</a>
    // </div>
    //           </div>
    //         </div>
    //       </div>
    //     </Jump>
    //   </Affix>
    //   )}
    //   <div>
    // <Spin>
    //   <img src="/logo.svg" className="logo" />
    // </Spin>
    //     <img src="/Banner.svg" style={{ width: "100%" }} />
    //   </div>
    // </div>
    <div className="homedesktop">
      {isTabletOrMobile ? (
        <div style={{ position: "absolute", right: "20px", top: "20px" }}>
          <React.Fragment key={"right"}>
            <div style={{ display: "flex", justifyContent: "end", zIndex: 1 }}>
              <Button onClick={toggleDrawer("right", true)}>
                {<img src="/menu_black_24dp.svg" />}
              </Button>
              <Drawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
              >
                {list("right")}
              </Drawer>
            </div>
          </React.Fragment>
        </div>
      ) : (
        <div className="header" style={{ padding: 20 }}>
          <div className="parallelogram">
            <img src="/Group 812.svg" style={{ marginTop: -67 }} />
            <a href="#home">HOME</a>
          </div>
          <div className="parallelogram">
            <a href="#about">ABOUT</a>
          </div>
          <div className="parallelogram">
            <a href="#tekonomics">TEkENOMICS</a>
          </div>
          <div className="parallelogram">
            <a href="#roadmap">ROADMAP</a>
          </div>
          <div className="parallelogram">
            <a href="#game">GAME</a>
          </div>
          <div className="parallelogram">
            <a href="#advisors">ADVISORS</a>
          </div>
          <div className="parallelogram">
            <a href="#footer">PARTNERS</a>
            <img src="/Group 812.svg" style={{ marginTop: -67 }} />
          </div>
        </div>
      )}
      <div className="herologo" >
        <Spin>
          <img src="/logo.svg" className="imagesize"/>
        </Spin>
      </div>
    </div>
  );
};

export default Header;
