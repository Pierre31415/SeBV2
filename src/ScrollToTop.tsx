import React, { useState, useEffect } from "react";
// import { FaArrowAltCircleUp } from "react-icons/fa";
import "./ScrollToTop.scss";

//Petite flèche en bas à droite qui permet de remonter en haut de page

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="btn-scrollTop"
      style={{ display: isVisible ? "block" : "none" }}
      onClick={goTop}
    >
      <div className="scrollTopBack">
        <span className="material-symbols-outlined">arrow_upward</span>
      </div>
    </button>
  );
};

export default ScrollToTop;
