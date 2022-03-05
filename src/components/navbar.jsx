import React, { useEffect, useRef } from "react";
import Home from "./../pages/Home";
import { useSpring, animated, useChain } from "react-spring";
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar({ animationChain, setAnimationChain, useAnimation }) {
  const navRef = useRef();
  const navStyle = useAnimation(navRef, -100, 0, 0, 0);
  useEffect(() => {
    setAnimationChain((old) => [...old, navRef]);
  }, []);
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  return (
    <div className="nav-container">
      <animated.div className="nav-bar" style={navStyle}>
        <Link className="logo">Logo</Link>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </Link>
        <div>|</div>
        <Link
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          duration={500}
        >
          Projects
        </Link>
        <div>|</div>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          // duration={500}
          onClick={scrollToBottom}
        >
          Contact
        </Link>
      </animated.div>
    </div>
  );
}

export default NavBar;
