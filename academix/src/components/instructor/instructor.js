import React from "react";
import "../../components/instructor/instructor.css";
import instructor1 from "../../assets/images/instructor1.png";
import instructor2 from "../../assets/images/instructor2.png";
import instructor3 from "../../assets/images/instructor3.png";
import instructor4 from "../../assets/images/instructor4.png";
import instructor5 from "../../assets/images/instructor5.png";

export default function Instructors() {
  return (
    <div className="instructors">
      <h3>Courses taught by World Class Instructors</h3>
      <div className="photos">
        <img src={instructor1} alt="A male instructor" />
        <img src={instructor2} alt="A female instructor" />
        <img src={instructor3} alt="A male instructor" />
        <img src={instructor4} alt="A female instructor" />
        <img src={instructor5} alt="A male instructor" />
      </div>
      <p className="share-expertise">
        Looking to share your expertise and Inspire Minds?
        <span className="become-one"> Become an Instructor</span>
      </p>
    </div>
  );
}

