import React from "react";
import { useSpring, animated } from "react-spring";
import "./LandingPage.css";

const LandingPage = () => {
  const propsGreeting = useSpring({
    opacity: 1,
    delay: 370,
    from: { opacity: 0 }
  });
  // const propsName = useSpring({
  //   opacity: 1,
  //   delay: 650,
  //   marginTop: 20,
  //   from: { opacity: 0, marginTop: -500 }
  // });
  // const propsIntro = useSpring({
  //   opacity: 1,
  //   delay: 1500,
  //   from: { opacity: 0 }
  // });
  return (
    <div className="landingPage">
      <animated.h1 style={propsGreeting} className="greeting">
        Hi, I am roshan
      </animated.h1>
    </div>
  );
};

export default LandingPage;
