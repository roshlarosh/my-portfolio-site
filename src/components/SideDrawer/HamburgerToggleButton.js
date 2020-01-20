import React from "react";
import "./HamburgerToggleButton.css";

const HamburgerToggleButton = () => {
  return (
    <button className="toggle-button">
      <span className="toggle-button-line" />
      <span className="toggle-button-line" />
      <span className="toggle-button-line" />
    </button>
  );
};

export default HamburgerToggleButton;
