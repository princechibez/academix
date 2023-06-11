import React from "react";
import "../levelUp/levelUp.css";
import Star3 from "../../assets/images/Star3.png";

export default function Levelup() {
  return (
    <div className="levelup">
      <div className="left">
        <h2>
          Ready to level up
          <br /> your learning experience?
        </h2>
        <button>Join Now</button>
      </div>
      <div className="right">
        <img src={Star3} alt="A woman working on her laptop" />
      </div>
    </div>
  );
}

