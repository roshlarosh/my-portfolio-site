import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";

const SideDrawer = props => {
  let drawerClasses = ["side-drawer"];
  if (props.show) {
    drawerClasses.push("open");
  }

  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
        <li>
          {" "}
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
