import React, { useContext, useEffect, useState } from "react";
import Nav from "../../components/navAuth/nav";
import Main from "../../components/heroSection/main";
import Range from "../../components/range/range";
import Instructors from "../../components/instructor/instructor";
import Levelup from "../../components/levelUp/levelUp";
import Footer from "../../components/footer/footer";
import CoursesList from "../../components/courseList/courseList";
import axios from "../../utility/axios.config";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../App";

const LandingPage = () => {
  const { token } = useContext(AuthContext);
  const [topCourses, setTopCourses] = useState(null);
  const [newCourses, setNewCourses] = useState(null);
  const [topCoursePage, setTopCoursePage] = useState(1);
  const [newCoursePage, setNewCoursePage] = useState(1);

  useEffect(() => {
    const fetchTopCourses = async () => {
      try {
        const res = await axios.get(
          `/fetch-all-courses?itemsPerPage=9&page=${topCoursePage}`
        );
        setTopCourses(res.data.data);
      } catch (err) {
        toast.error("Can't fetch courses", {
          autoClose: 2000,
        });
      }
    };

    const fetchNewCourses = async () => {
      try {
        const res = await axios.get(
          `/fetch-all-courses?itemsPerPage=9&page=${newCoursePage}`
        );
        setNewCourses(res.data.data);
      } catch (err) {
        toast.error("Can't fetch courses", {
          autoClose: 2000,
        });
      }
    };

    fetchTopCourses();
    fetchNewCourses();
  }, [token, topCoursePage, newCoursePage]);

  const setPageHandler = (type, pageNumber) => {
    if (type === "top") {
      setTopCoursePage(pageNumber);
    }
    if (type === "new") {
      setNewCoursePage(pageNumber);
    }
  };

  return (
    <>
      <Nav />
      <Main />
      <Range />
      <CoursesList
        pageCount={50 / 10}
        pageChanged={(page) => setPageHandler("top", page)}
        data={topCourses}
        headline="Our Top Courses"
      />
      <Instructors />
      <Levelup />
      <CoursesList
        pageCount={50 / 10}
        pageChanged={(page) => setPageHandler("new", page)}
        data={newCourses}
        headline="New courses"
      />
      <ToastContainer />
      <Footer />
    </>
  );
};

export default LandingPage;
