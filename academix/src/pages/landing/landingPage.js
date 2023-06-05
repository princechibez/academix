import React from 'react'
import Nav from '../../components/navAuth/nav';
import Main from '../../components/heroSection/main';
import Range from '../../components/range/range';
import Topcourses from '../../components/topCourses/topCourses';
import Instructors from '../../components/instructor/instructor';
import Levelup from '../../components/levelUp/levelUp';
import Newcourses from '../../components/newCourses';
import Footer from '../../components/footer/footer';


const LandingPage = () => {
  return (
    <>
      <Nav />
      <Main />
      <Range />
      <Topcourses />
      <Instructors />
      <Levelup />
      <Newcourses />
      <Footer/>
    </>
  )
}

export default LandingPage;
 

