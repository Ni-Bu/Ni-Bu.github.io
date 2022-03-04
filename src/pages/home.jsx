import React, { useEffect, useRef } from "react";

import foreground1 from "../img/foreground1.png";
import hello from "../img/Hello.png";
import resume from "../img/icons8-resume-500.png";
import github from "../img/icons8-github.png";
import { useSpring, animated, useChain } from "react-spring";
function Home({ animationChain, setAnimationChain, useAnimation }) {
  const introTextRef = useRef();
  const introTextStyle = useAnimation(introTextRef, 0, 0, 0, -500);
  const introLinkRef = useRef();
  const introLinkStyle = useAnimation(introLinkRef, 0, 0, -100, 0);
  const foreground1Ref = useRef();
  const foreground1Style = useAnimation(foreground1Ref, 0, -200, 0, 0);
  const helloImageRef = useRef();
  const helloImageStyle = useAnimation(helloImageRef, 0, -200, 0, 0);

  useEffect(() => {
    setAnimationChain((old) => [
      ...old,
      introTextRef,
      introLinkRef,
      foreground1Ref,
      helloImageRef,
    ]);
  }, []);

  console.log(animationChain);
  return (
    <div className="home">
      <div className="intro-left-container">
        <div className="intro-text-container">
          <animated.div className="intro-text" style={introTextStyle}>
            Hello, my name is Muneeb. <br />I am a frontend developer.
          </animated.div>
        </div>
        <div className="intro-links">
          <animated.img
            src={resume}
            className="inner1"
            style={introLinkStyle}
          />
          <animated.img
            src={github}
            className="inner2"
            style={introLinkStyle}
          />
        </div>
      </div>
      <div className="intro-right-container">
        <animated.img
          src={foreground1}
          className="child child-1"
          style={foreground1Style}
        />
        <animated.img
          src={hello}
          className="child child-2"
          style={helloImageStyle}
        />
      </div>
    </div>
  );
}
// const useAnimation = (ref, mTop, mRight, mBottom, mLeft) => {
//   const spring = useSpring({
//     from: {
//       opacity: 0,
//       marginTop: mTop,
//       marginRight: mRight,
//       marginBottom: mBottom,
//       marginLeft: mLeft,
//     },
//     to: {
//       opacity: 1,
//       marginTop: 0,
//       marginRight: 0,
//       marginBottom: 0,
//       marginLeft: 0,
//     },
//     ref: ref,
//   });
//   return spring;
// };

export default Home;
