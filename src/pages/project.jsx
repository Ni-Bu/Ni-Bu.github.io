import React from "react";
import foreground2 from "../img/foreground2.png";
import water from "../img/water-cooler.png";

function Project(props) {
  return (
    <div className="project">
      <div className="image-container">
        <img
          src={foreground2}
          className="inner2"
          alt="foreground for character to lean against"
        />

        <img
          src={water}
          className="inner1"
          alt="a character leaning against a water cooler"
        />
      </div>
      <div className="content-container">
        <button className="child-1">
          TaskNet: <br />A todo-list app.
        </button>
        <button className="child-2">Resume</button>
      </div>
    </div>
  );
}

export default Project;
