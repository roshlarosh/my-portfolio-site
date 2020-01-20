import React from "react";
import "./Navbar.css";
import HamburgerToggleButton from "../SideDrawer/HamburgerToggleButton";

const Navbar = props => {
  return (
    <header className="navbar">
      <nav className="navbar-navigation">
        <div className="navbar-toggle-button">
          <HamburgerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="navbar-logo">
          <a href="/" alt={"Logo"}>
            roshlarosh.
          </a>
        </div>
        <div className="spacer" />
        <div className="navbar-navigation-items">
          <ul>
            <li>
              <a href="/"> Projects</a>
            </li>
            <li>
              <a href="/"> About</a>
            </li>
            <li>
              <a href="/"> Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
