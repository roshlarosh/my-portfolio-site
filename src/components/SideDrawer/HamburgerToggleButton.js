import React from "react";
import "./HamburgerToggleButton.css";

const HamburgerToggleButton = props => {
  return (
    <button className="toggle-button" onClick={props.click}>
      <span className="toggle-button-line" />
      <span className="toggle-button-line" />
      <span className="toggle-button-line" />
    </button>
  );
};

export default HamburgerToggleButton;
