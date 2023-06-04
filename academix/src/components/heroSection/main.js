import React from "react";
import "../heroSection/main.css";
import Star from "../../assets/Star.png";
import Star1 from "../../assets/Star1.png";
import Star2 from "../../assets/Star2.png";
import Star3 from "../../assets/Star3.png";

function Main() {
  return (
    <div className="main">
      <div className="main-container">
        <div className="top">
          <div className="top-left">
            <h1>
              Unlock Your <span className="potential">Potential,</span> Embrace
              Knowledge
            </h1>
          </div>
          <div className="top-right">
            <img
              src={Star}
              alt="Image of a boy on computer"
              className="image-1"
            />
            <img
              src={Star1}
              alt="Image of a smiling lady"
              className="image-2"
            />
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-left">
            <p className="join-details">
              Discover a world of endless possibilities with our cutting-edge
              <br /> Learning Management System. Dive into engaging courses,
              <br /> interactive resources, and personalized learning paths.
              Join us <br /> today and empower your future!
            </p>
            <button className="join-button">Join Now</button>
          </div>
          <div className="bottom-right">
            <img
              src={Star2}
              alt="Image of a man staring at a computer"
              className="image-3"
            />
            <img
              src={Star3}
              alt="Image of a lady on computer"
              className="image-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
