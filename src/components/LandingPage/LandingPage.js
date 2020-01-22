import React from "react";
import { useSpring, animated } from "react-spring";
import "./LandingPage.css";

const LandingPage = () => {
  const propsGreeting = useSpring({
    opacity: 1,
    delay: 350,
    from: { opacity: 0 }
  });
  const propsName = useSpring({
    opacity: 1,
    delay: 650,
    marginTop: 20,
    from: { opacity: 0, marginTop: -500 }
  });
  const propsIntro = useSpring({
    opacity: 1,
    delay: 1500,
    from: { opacity: 0 }
  });
  return (
    <div className="landingPage">
      <animated.h1
        style={{ paddingTop: 64, propsGreeting }}
        className="greeting"
      >
        Hi I am
      </animated.h1>
      <section>
        <animated.h1 style={propsName} className="name">
          Roshan.
        </animated.h1>
      </section>
      <animated.aside style={propsIntro} className="intro">
        I am a fullstack developer trained at the prestigious Founders and
        coders bootcamp. Checkout some of the projects I worked on.
      </animated.aside>
    </div>
  );
};

export default LandingPage;
