import React, { useEffect, useRef } from "react";
import Home from "./../pages/Home";
import { useSpring, animated, useChain } from "react-spring";
function NavBar({ animationChain, setAnimationChain, useAnimation }) {
  const navRef = useRef();
  const navStyle = useAnimation(navRef, -100, 0, 0, 0);
  useEffect(() => {
    setAnimationChain((old) => [...old, navRef]);
  }, []);
  return (
    <div className="nav-container">
      <animated.div className="nav-bar" style={navStyle}>
        <li className="logo">Logo</li>
        <li>Home</li>
        <li>Projects</li>
        <li>Contact</li>
      </animated.div>
    </div>
  );
}

export default NavBar;
