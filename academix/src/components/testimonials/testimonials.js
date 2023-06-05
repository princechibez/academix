import React from "react";
import "../testimonials/testimonials.css";
import testimonial1 from "../../assets/images/testimonial1.png";
import testimonial2 from "../../assets/images/testimonial2.png";
import testimonial3 from "../../assets/images/testimonial3.png";

function Testimonials() {
  return (
    <div className="testimonials">
      <h2>
        Testimonials From Our <span className="wonderful">Wonderful</span> Users
      </h2>
      <div className="users">
        <div className="testimonial-1">
          <img src={testimonial1} alt="User 1" />
          <div className="user-note">
            <h3>Nana Nsude</h3>
            <p>
              Using this Academix has been a game-changer for me! The platform
              offers an extensive range of courses, interactive learning
              materials, and a user-friendly interface. It has transformed the
              way I learn, making it engaging and convenient.
            </p>
          </div>
        </div>
        <div className="testimonial-2">
          <img src={testimonial2} alt="User 2" />
          <div className="user-note">
            <h3>Prince Externet</h3>
            <p>
              As an educator, I've found Academix to be an invaluable tool in my
              teaching journey. It provides me with a seamless platform to
              create and deliver dynamic online courses.
            </p>
          </div>
        </div>
        <div className="testimonial-3">
          <img src={testimonial3} alt="User 3" />
          <div className="user-note">
            <h3>Kosi Ikwukwo</h3>
            <p>
              The diverse course selection and personalized learning paths
              provided by Academix has allowed me to pursue my interests and
              acquire new skills at my own pace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
