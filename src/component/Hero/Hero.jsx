import React from "react";
import backgroundImage from "../../assets/backGround__Hero.jpg";

import "./Hero.css";

export const Hero = () => {
  return (
    <>
      <div
        className="home-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="home-content">
          <h1>Let Your Home Be Unique</h1>
          <p>
            There are many variations of the passages of lorem Ipsum from
            available, variations of the passages.
          </p>
          <a href="#" className="home-button">
            Get Started &rarr;
          </a>
        </div>
      </div>
    </>
  );
};
export default Hero;
