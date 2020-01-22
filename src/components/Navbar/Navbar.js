import React from "react";
import "./Navbar.css";
import HamburgerToggleButton from "../SideDrawer/HamburgerToggleButton";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <header className="navbar">
      <nav className="navbar-navigation">
        <div className="navbar-toggle-button">
          <HamburgerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="navbar-logo">
          <Link to="/" alt={"Logo"}>
            roshlarosh.
          </Link>
        </div>
        <div className="spacer" />
        <div className="navbar-navigation-items">
          <ul>
            <li>
              <Link to="/projects"> Projects</Link>
            </li>
            <li>
              <Link to="/about"> About</Link>
            </li>
            <li>
              <Link to="/contact"> Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
