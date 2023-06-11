import React, { useContext, useEffect, useState } from "react";
import Nav from "../../components/navAuth/nav";
import Footer from "../../components/footer/footer";
import CoursesList from "../../components/courseList/courseList";
import axios from "../../utility/axios.config";
import { AuthContext } from "../../App";
import { useSearchParams } from "react-router-dom";

const Courses = () => {
  const [params] = useSearchParams();
  const { token, setToken } = useContext(AuthContext);
  const [searchCourses, setSearchCourses] = useState(null);
  const [headline, setHeadline] = useState("All Courses");
  const [page, setPage] = useState(1);

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
          `/search-courses?itemsPerPage=12&page=${page}`
        );
        setSearchCourses(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSearchCourses();
  }, [token, searchQuery, category, page]);

  const setPageHandler = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <>
      <Nav />
      <CoursesList
        pageCount={50 / 10}
        pageChanged={setPageHandler}
        data={searchCourses}
        headline={headline}
      />
      {/* <CoursesList data={newCourses} headline="New courses" /> */}
      <Footer />
    </>
  );
};

export default Courses;
