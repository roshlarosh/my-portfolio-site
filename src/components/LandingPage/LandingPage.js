import React from "react";
import { useSpring, animated } from "react-spring";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    marginTop: "50px",
    width: "230px",
    height: "100px",
    backgroundColor: "#f5f5ef",
    fontSize: "18px"
  }
});

const LandingPage = () => {
  const classes = useStyles();
  const propsIntro = useSpring({
    opacity: 1,
    delay: 1000,
    from: { opacity: 0 }
  });
  const propsButton = useSpring({
    opacity: 1,
    delay: 2200,
    from: { opacity: 0 }
  });

  return (
    <div className="landingPage">
      <h1 className="greeting">Hi, I am Roshan</h1>
      <p>
        <animated.h4 style={propsIntro} className="intro">
          I am a full-stack developer based in London
        </animated.h4>
      </p>
      <animated.div style={propsButton} className="buttonContainer">
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <Button variant="contained" className={classes.button}>
            Projects
          </Button>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <Button variant="contained" className={classes.button}>
            About me
          </Button>
        </Link>
      </animated.div>
    </div>
  );
};

export default LandingPage;
