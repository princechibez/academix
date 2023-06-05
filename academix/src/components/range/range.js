import React from "react";
import "../range/range.css";
import design from "../../assets/images/design.png";
import developer from "../../assets/images/developer.png";
import web3 from "../../assets/images/web3.png";
import finance from "../../assets/images/finance.png";
import music from "../../assets/images/music.png";
import cooking from "../../assets/images/cooking.png";

export default function Range() {
  return (
    <div className="range">
      <div className="text-container">
        <h2>An Extensive Range of Course Offerings</h2>
        <p>
          Explore our comprehensive catalog of diverse courses, <br /> carefully
          curated to cater to your learning goals.
        </p>
      </div>
      <div className="offerings">
        <div className="top">
          <div className="design">
            <img src={design} alt="designer" />
            <p className="button">Design</p>
          </div>
          <div className="development">
            <img src={developer} alt="developer" />
            <p className="button">Development</p>
          </div>
          <div className="web-3">
            <img src={web3} alt="web 3" />
            <p className="button">Web 3</p>
          </div>
        </div>
        <div className="bottom">
          <div className="finance">
            <img src={finance} alt="finance" />
            <p className="button">Finance</p>
          </div>
          <div className="music">
            <img src={music} alt="music" />
            <p className="button">Music</p>
          </div>
          <div className="cooking">
            <img src={cooking} alt="cooking" />
            <p className="button">Cooking</p>
          </div>
        </div>
      </div>
    </div>
  );
}

