import React, { useState, useRef } from "react";
import bye from "../img/bye.png";
import { useInViewEffect } from "react-hook-inview";
function Contact({ useAnimation, inView, setInView }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useInViewEffect(
    ([entry], observer) => {
      setIsVisible(entry.isIntersecting);
      setInView((prevState) => ({
        ...prevState,
        contact: entry.isIntersecting,
      }));
    },
    { threshold: 0.5 }
  );
  return (
    <div className="contact" id="contact" ref={ref}>
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
