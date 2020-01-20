import React from "react";
import "./SideDrawer.css";

const SideDrawer = () => {
  return (
    <nav className="side-drawer">
      <ul>
        <li>
          {" "}
          <a href="/">Projects</a>
        </li>
        <li>
          {" "}
          <a href="/">CV</a>
        </li>
        <li>
          {" "}
          <a href="/">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
