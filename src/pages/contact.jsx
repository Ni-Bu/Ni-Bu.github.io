import React from "react";
import bye from "../img/bye.png";
function Contact(props) {
  return (
    <div className="contact">
      <div className="text-container">
        <div>
          Thanks for making it this far.
          <br /> Feel free to contact me at :
        </div>
        <div className="email">muhammadahmad9497@hotmail.com</div>
      </div>
      <img src={bye} className="image" alt="a character saying goodbye" />
    </div>
  );
}

export default Contact;
