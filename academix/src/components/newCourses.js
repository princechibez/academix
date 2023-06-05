import React from "react";
import "../components/topCourses/topCourses.css";
import orangeline from "../assets/images/orangeline.png";
import purpleline from "../assets/images/purpleline.png";
import foundation from "../assets/images/foundation.png";
import delicious from "../assets/images/delicious.png";
import adobe from "../assets/images/adobe.png";
import technology from "../assets/images/technology.png";
import storytelling from "../assets/images/storytelling.png";
import melodies from "../assets/images/melodies.png";
import marketing from "../assets/images/marketing.png";
import unleash from "../assets/images/unleash.png";

export default function Newcourses() {
  return (
    <div className="newcourses">
      <div className="headline">
        <h2>New Courses</h2>
        <div className="lines">
          <img src={orangeline} alt="orange line" />
          <img src={purpleline} alt="purple line" />
        </div>
      </div>
      <div className="courses">
        <div className="top">
          <div className="foundation">
            <img src={foundation} alt="Software development" />
            <p>Software Engineering</p>
            <h2>Foundation course to understand software development</h2>
          </div>
          <div className="delicious">
            <img src={delicious} alt="Art of cooking" />
            <p>Cooking</p>
            <h2>
              Delicious Delights: A Culinary Journey in the Art of Cooking
            </h2>
          </div>
          <div className="adobe">
            <img src={adobe} alt="User Interface" />
            <p>Product Design</p>
            <h2>Foundation of User Interface Design using Adobe XD</h2>
          </div>
          <div className="technology">
            <img src={technology} alt="Web 3" />
            <p>Blockchain</p>
            <h2>Web3: Unleashing the Future of Decentralized Technology</h2>
          </div>
        </div>
        <div className="bottom">
          <div className="storytelling">
            <img src={storytelling} alt="Photography" />
            <p>Photography</p>
            <h2>
              The Art of Visual Storytelling: Mastering Photography Essentials.
            </h2>
          </div>
          <div className="melodies">
            <img src={melodies} alt="Music" />
            <p>Music</p>
            <h2>Harmonious Melodies: Exploring the Art of Music.</h2>
          </div>
          <div className="marketing">
            <img src={marketing} alt="Marketing" />
            <p>Marketing</p>
            <h2>
              Strategic Marketing <br /> Mastery: Driving
              <br />
              Success in the Digital
              <br /> Age.
            </h2>
          </div>
          <div className="unleash">
            <img src={unleash} alt="Personal Development" />
            <p>Personal Development</p>
            <h2>Unleash Your Potential: Mastering Personal Development.</h2>
          </div>
        </div>
        <div className="more-button">View more</div>
      </div>
    </div>
  );
}

