import React, { useState, useRef } from "react";
import foreground2 from "../img/foreground2.png";
import water from "../img/water-cooler.png";
import { useInViewEffect } from "react-hook-inview";
import { animated, useChain } from "react-spring";

function Project({ useAnimation, setInView }) {
  const [isVisible, setIsVisible] = useState(false);
  let animationChain;
  const ref = useInViewEffect(
    ([entry], observer) => {
      setIsVisible(entry.isIntersecting);
      setInView((prevState) => ({
        ...prevState,
        project: entry.isIntersecting,
      }));
    },
    { threshold: 0.5 }
  );

  const foregroundRef = useRef();
  const foregroundStyle = useAnimation(foregroundRef, 0, 0, 0, -500);
  const waterRef = useRef();
  const waterStyle = useAnimation(waterRef, -200, 0, 0, 0);
  const buttonLeftRef = useRef();
  const buttonLeftStyle = useAnimation(buttonLeftRef, 0, 0, -200, 0);
  const buttonRightRef = useRef();
  const buttonRightStyle = useAnimation(buttonRightRef, 0, 0, -200, 0);

  animationChain = isVisible
    ? [foregroundRef, waterRef, buttonLeftRef, buttonRightRef]
    : [];

  useChain(animationChain, [0.4, 0.8, 1.1, 1.3]);
  return (
    <div className="project" ref={ref} id="project">
      <div className="image-container">
        <animated.img
          src={foreground2}
          className="inner2"
          alt="foreground for character to lean against"
          style={foregroundStyle}
        />

        <animated.img
          src={water}
          className="inner1"
          alt="a character leaning against a water cooler"
          style={waterStyle}
        />
      </div>
      <div className="content-container">
        <animated.button className=" child-1" style={buttonLeftStyle}>
          TaskNet: <br />A todo-list app.
        </animated.button>
        <animated.button className=" child-2" style={buttonRightStyle}>
          Resume
        </animated.button>
      </div>
    </div>
  );
}

export default Project;
