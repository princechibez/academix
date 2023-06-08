import React, { useContext, useEffect, useState } from "react";
import Nav from "../../components/navAuth/nav";
import Main from "../../components/heroSection/main";
import Range from "../../components/range/range";
import Instructors from "../../components/instructor/instructor";
import Levelup from "../../components/levelUp/levelUp";
import Footer from "../../components/footer/footer";
import CoursesList from "../../components/courseList/courseList";
import axios from "../../utility/axios.config";
import { AuthContext } from "../..";

const LandingPage = () => {
  const { token, setToken } = useContext(AuthContext);
  const [topCourses, setTopCourses] = useState(null);
  const [newCourses, setNewCourses] = useState(null);

  useEffect(() => {
    const fetchTopCourses = async () => {
      try {
        const res = await axios.get("/fetch-all-courses?itemsPerPage=9&page=2");
        setTopCourses(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchNewCourses = async () => {
      try {
        const res = await axios.get("/fetch-all-courses?itemsPerPage=9&page=1");
        setNewCourses(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTopCourses();
    fetchNewCourses();
  }, [token]);

  const logout = () => {
    setToken(null);
    return localStorage.clear("token");
  };

  return (
    <>
      <Nav authenticated={token || localStorage.getItem("token")} onLogout={logout} />
      <Main />
      <Range />
      <CoursesList data={topCourses} headline="Our Top Courses" />
      <Instructors />
      <Levelup />
      <CoursesList data={newCourses} headline="New courses" />
      <Footer />
    </>
  );
};

export default LandingPage;
