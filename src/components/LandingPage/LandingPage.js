import React from "react";
import { useSpring, animated } from "react-spring";
import "./LandingPage.css";

const LandingPage = () => {
  // const propsGreeting = useSpring({
  //   opacity: 1,
  //   delay: 370,
  //   from: { opacity: 0 }
  // });
  // const propsName = useSpring({
  //   opacity: 1,
  //   delay: 650,
  //   marginTop: 20,
  //   from: { opacity: 0, marginTop: -500 }
  // });
  const propsIntro = useSpring({
    opacity: 1,
    delay: 1000,
    from: { opacity: 0 }
  });
  return (
    <div className="landingPage">
      <h1 className="greeting">Hi, I am roshan</h1>
      <p>
        <animated.h3 style={propsIntro} className="intro">
          I am a full-stack developer based in London
        </animated.h3>
        <animated.h4 style={propsIntro} className="contact">
          Contact me
        </animated.h4>
      </p>
    </div>
  );
};

export default LandingPage;
