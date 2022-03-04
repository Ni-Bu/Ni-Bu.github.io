import logo from "./logo.svg";
import { Parallax } from "react-parallax";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/navbar";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import React, { useState } from "react";
import { useSpring, animated, useChain } from "react-spring";

function App() {
  const [animationChain, setAnimationChain] = useState([]);
  useChain(animationChain);
  return (
    <div className="App">
      <NavBar
        animationChain={animationChain}
        setAnimationChain={setAnimationChain}
        useAnimation={useAnimation}
      />
      <Home
        animationChain={animationChain}
        setAnimationChain={setAnimationChain}
        useAnimation={useAnimation}
      />
      <Project />
      <Contact />
    </div>
  );
}

const useAnimation = (ref, mTop, mRight, mBottom, mLeft) => {
  const spring = useSpring({
    from: {
      opacity: 0,
      marginTop: mTop,
      marginRight: mRight,
      marginBottom: mBottom,
      marginLeft: mLeft,
    },
    to: {
      opacity: 1,
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
    },
    ref: ref,
  });
  return spring;
};
export default App;
