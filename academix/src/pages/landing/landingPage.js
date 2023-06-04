import React from "react";
import Nav from "../components/navAuth/nav.js";
import Main from "../components/heroSection/main.js";
import Range from "../components/range/range.js";
import Topcourses from "../components/topCourses/topCourses.js";
import Instructors from "../components/instructor/instructor.js";
import Testimonials from "../components/testimonials/testimonials.js";
import Levelup from "../components/levelUp/levelUp.js";
import Newcourses from "../components/newCourses";
import Footer from "../components/footer/footer.js";

function LandingPage() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Range />
      <Topcourses />
      <Instructors />
      <Testimonials />
      <Levelup />
      <Newcourses />
      <Footer />    
    </div>
  );
}
