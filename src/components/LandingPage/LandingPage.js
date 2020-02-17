import React from "react";
import { useSpring, animated } from "react-spring";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const propsIntro = useSpring({
    opacity: 1,
    delay: 1000,
    from: { opacity: 0 }
  });
  const propsText = useSpring({
    opacity: 1,
    delay: 2100,
    from: { opacity: 0 }
  });
  return (
    <div className="landingPage">
      <h1 className="greeting">Hi, I am roshan</h1>
      <p>
        <animated.h3 style={propsIntro} className="intro">
          I am a full-stack developer based in London
        </animated.h3>
        <Link to="/projects">
          <animated.h4 style={propsText} className="contact">
            Checkout some projects I've worked on
          </animated.h4>
        </Link>
      </p>
    </div>
  );
};

export default LandingPage;
