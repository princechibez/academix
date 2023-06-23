import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import Nav from "../../components/navAuth/nav";
import Footer from "../../components/footer/footer";

import {
  CourseContentSection,
  CourseDetailsSection,
  DescTextSection,
  DescriptionHeader,
  DescriptionWrapper,
  PreviewVideo,
} from "./classroomStyles";
import Module from "../../components/courseModuleList/moduleList";
import InstructorProfile from "../../components/instructorProfile/instructorProfile";
import axios from "../../utility/axios.config";
import ReactPlayer from "react-player";
import { AuthContext } from "../../App";

const Classroom = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { courseID } = useParams();
  const windowScreenTopRef = useRef();
  const [currentUser, setCurrentUser] = useState();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const [courseDetail, setCourseDetail] = useState();
  const [focusedLecture, setFocusedLecture] = useState();

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
    setCurrentUser(JSON.parse(user));
    const fetchCourseDetails = async () => {
      const res = await axios.get(`/fetch-course-details/${courseID}`);
      setCourseDetail(res.data.data);
    };
    fetchCourseDetails();
  }, []);

  useEffect(() => {
    // if (!courseDetail?.registered_students.includes(currentUser?._id)) {
    //   navigate(`/course-description/${courseID}`);
    // }
    setFocusedLecture(courseDetail?.modules[0].contents[0]);
  }, [courseDetail, currentUser]);

  useEffect(() => {
    windowScreenTopRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [focusedLecture]);

  const goToReviews = () => {
    navigate("/reviews");
  };

  return (
    <React.Fragment>
      <Nav />
      {courseDetail ? (
        <>
          <DescriptionWrapper ref={windowScreenTopRef}>
            <CourseDetailsSection>
              {/* <DescriptionHeader>
              Course title
              <Typography variant="h4">{courseDetail?.title}</Typography>
              Instructor name
              <Typography variant="h6">{courseDetail?.category}</Typography>
            </DescriptionHeader> */}

              {/* course preview video thumbnail */}
              <PreviewVideo>
                {/* video tag here... */}
                <ReactPlayer
                  playing
                  url={focusedLecture?.video.url}
                  height="100%"
                  width="100%"
                  style={{
                    objectFit: "cover",
                  }}
                  controls
                  pip={false}
                  config={{
                    file: {
                      attributes: {
                        controlsList: "nodownload",
                      },
                    },
                  }}
                />
              </PreviewVideo>

              {/* Description text */}
              <DescTextSection>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {focusedLecture?.content_title}
                </Typography>
                <Typography variant="subtitle">
                  {focusedLecture?.content_description}
                </Typography>
              </DescTextSection>
            </CourseDetailsSection>

            {/* Course Content */}
            <CourseContentSection>
              {/* Content List and dropdown section */}
              <div>
                {courseDetail?.modules.map((content, index) => (
                  <Module
                    focusLecture={(lectureContents) =>
                      setFocusedLecture(lectureContents)
                    }
                    setIndex={setActiveIndex}
                    activeIndex={activeIndex}
                    moduleIndex={index}
                    moduleContent={content}
                    key={index}
                  />
                ))}
              </div>
            </CourseContentSection>
          </DescriptionWrapper>

          {/* Instructor profile */}
          <div style={{ marginTop: 42, padding: "0px 24px" }}>
            <Typography variant="h5">Instructor</Typography>
            <InstructorProfile
              focusedCourseID={courseID}
              info={courseDetail?.instructor}
              rateValue={4}
            />
          </div>
        </>
      ) : (
        <Box
          sx={{
            height: "100vh",
            width: "100%",
            display: "flex",
            flexFlow: "column",
            pr: 2,
            padding: 12,
          }}
        >
          <Box sx={{ pt: 2, display: "flex", flexFlow: "column", gap: 2 }}>
            <Skeleton
              animation="wave"
              variant="rectangular"
              style={{ borderRadius: 8 }}
              width={200}
            />
            <Skeleton
              animation="wave"
              variant="rectangular"
              style={{ borderRadius: 8 }}
              width={250}
            />
            <Skeleton
              animation="wave"
              variant="rectangular"
              width="80%"
              height={300}
            />
          </Box>
          <Box sx={{ pt: 1 }}>
            <Skeleton
              animation="wave"
              variant="rectangular"
              style={{ margin: "4px 0", borderRadius: 8 }}
              width="60%"
            />
            <Skeleton
              animation="wave"
              variant="rectangular"
              style={{ margin: "4px 0", borderRadius: 8 }}
              width="90%"
            />
            <Skeleton
              animation="wave"
              variant="rectangular"
              style={{ margin: "4px 0", borderRadius: 8 }}
              width="50%"
            />
          </Box>
        </Box>
      )}
      <Footer />
    </React.Fragment>
  );
};

export default Classroom;
