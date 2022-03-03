import React from "react";

import foreground1 from "../img/foreground1.png";
import hello from "../img/Hello.png";
import resume from "../img/icons8-resume-500.png";
import github from "../img/icons8-github.png";

function Home(props) {
  return (
    <div className="home">
      <div className="intro-left-container">
        <div className="intro-text-container">
          <div className="intro-text">
            Hello, my name is Muneeb. <br />I am a frontend developer.
          </div>
        </div>
        <div className="intro-links">
          <img src={resume} className="inner1" />
          <img src={github} className="inner2" />
        </div>
      </div>
      <div className="intro-right-container">
        <img src={foreground1} className="child child-1" />
        <img src={hello} className="child child-2" />
      </div>
    </div>
  );
}

export default Home;
