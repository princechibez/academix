import React from 'react'
import Nav from '../../components/navAuth/nav';
import Main from '../../components/heroSection/main';
import Range from '../../components/range/range';
import Instructors from '../../components/instructor/instructor';
import Levelup from '../../components/levelUp/levelUp';
import Footer from '../../components/footer/footer';
import CoursesList from '../../components/courseList/courseList';


const LandingPage = () => {
  return (
    <>
      <Nav />
      <Main />
      <Range />
      <CoursesList headline="Our Top Courses" />
      <Instructors />
      <Levelup />
      <CoursesList headline="New courses" />
      <Footer/>
    </>
  )
}

export default LandingPage;
 

