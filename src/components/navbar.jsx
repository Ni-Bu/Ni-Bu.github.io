import React from "react";
import Home from "./../pages/Home";

function NavBar(props) {
  return (
    <div className="nav-container">
      <div className="nav-bar">
        <li className="logo">Logo</li>
        <li>Home</li>
        <li>Projects</li>
        <li>Contact</li>
      </div>
    </div>
  );
}

export default NavBar;
