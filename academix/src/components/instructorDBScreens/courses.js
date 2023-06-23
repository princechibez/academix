import CoursesList from "../courseList/courseList";
import { courses } from "../../model/courses";
import { useEffect, useState } from "react";
import axios from "../../utility/axios.config";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Courses(props) {
  const navigate = useNavigate();
  const [instructorCourses, setInstructorCourses] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(props.user));
  }, []);

  useEffect(() => {
    const fetchSearchCourses = async () => {
      const initialToastID = toast;
      try {
        const res = await axios.get(
          `/instructor-courses/${user?.instructorID}`
        );
        setInstructorCourses(res.data.data);
        toast.done(initialToastID);
      } catch (err) {
        if (err.response.data.message === "jwt expired") {
          toast.update(initialToastID, {
            render: "Not allowed to visit resource, login again",
            type: "error",
            isLoading: false,
            autoClose: 5000,
          });
        }
      }
    };

    fetchSearchCourses();
  }, [user]);

  const goToCreateCourse = () => {
    navigate("/dashboard/instructor/create-course");
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        // padding: 12,
        boxSizing: "border-box",
        display: "flex",
        flexFlow: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: 18,
          width: "100%",
          height: 200,
          marginTop: 80,
        }}
      >
        <Button
          onClick={goToCreateCourse}
          variant="contained"
          sx={{ padding: 2 }}
        >
          Create new course
        </Button>
      </div>
      <CoursesList headline="My Courses" data={instructorCourses} />
      <ToastContainer />
    </div>
  );
}

export default Courses;
