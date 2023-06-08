import React, { useContext, useEffect, useState } from "react";
import Nav from "../../components/navAuth/nav";
import Footer from "../../components/footer/footer";
import CoursesList from "../../components/courseList/courseList";
import axios from "../../utility/axios.config";
import { AuthContext } from "../..";
import { useSearchParams } from "react-router-dom";

const Courses = () => {
  const [params] = useSearchParams();
  const { token, setToken } = useContext(AuthContext);
  const [searchCourses, setSearchCourses] = useState(null);
  const [headline, setHeadline] = useState("All Courses");

  const searchQuery = params.get("query");
  const category = params.get("category");

  useEffect(() => {
    if (searchQuery || category) {
      setHeadline(
        `Results for ${searchQuery ? searchQuery : ""} ${
          category ? category : ""
        }`
      );
    }
    const fetchSearchCourses = async () => {
      try {
        const res = await axios.get(
          // `/search-courses?itemsPerPage=9&page=2&search=${searchQuery}&category=${category}`
          `/search-courses?itemsPerPage=12&page=2`
        );
        console.log(res.data)
        setSearchCourses(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSearchCourses();
  }, [token, searchQuery, category]);

  const logout = () => {
    setToken(null);
    return localStorage.clear("token");
  };

  return (
    <>
      <Nav
        authenticated={token || localStorage.getItem("token")}
        onLogout={logout}
      />
      <CoursesList data={searchCourses} headline={headline} />
      {/* <CoursesList data={newCourses} headline="New courses" /> */}
      <Footer />
    </>
  );
};

export default Courses;
