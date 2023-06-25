import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import { FiThumbsUp } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { LuFileVideo } from "react-icons/lu";
import { FaDownload } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { TfiCup } from "react-icons/tfi";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "../../components/navAuth/nav";
import Footer from "../../components/footer/footer";

import {
  CourseContentSection,
  CourseContentText,
  DescTextSection,
  DescriptionBrief,
  DescriptionHeader,
  DescriptionWrapper,
  EvenButtons,
  MediaElement,
  PreviewVideo,
  PrimaryDescList,
  PrimaryDescListItem,
  PrimaryDescWrapper,
  PrimaryDescription,
} from "./description_styles";
import Module from "../../components/courseModuleList/moduleList";
import Review from "../../components/reviews/review";
import InstructorProfile from "../../components/instructorProfile/instructorProfile";
import axios from "../../utility/axios.config";
import ReactPlayer from "react-player";
import { AuthContext } from "../../App";
import { usePaystackPayment } from "react-paystack";

const Description = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { courseID } = useParams();
  const [courseDetail, setCourseDetail] = useState();
  const [currentUser, setCurrentUser] = useState(null);
  const [isRegistered, setIsRegistered] = useState(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const topViewPort = useRef();

  const paymentInitializer = usePaystackPayment({
    email: currentUser?.email,
    firstname: currentUser?.username,
    phone: "+2347031936376",
    amount: Number(courseDetail?.price) * 100,
    publicKey: "pk_test_904a1fd588af2171957a946793188c349082d198",
  });

  useEffect(() => {
    setCurrentUser(JSON.parse(user));
    topViewPort.current?.scrollIntoView({ behavior: "smooth" });
    const fetchCourseDetails = async () => {
      const res = await axios.get(`/fetch-course-details/${courseID}`);
      setCourseDetail(res.data.data);
    };
    fetchCourseDetails();
  }, []);

  useEffect(() => {
    if (!currentUser) return;
    // Check if user has already registered for this course
    for (const course of currentUser.registered_courses) {
      if (course.courseId === courseID) {
        setIsRegistered(true);
        break;
      }
    }
  }, [currentUser]);

  const onSuccess = () => {
    toast.info("payment successfull", {
      type: "success",
      autoClose: 2000,
    });
    actionHandler("register");
  };

  const onClose = () => {
    toast.error("payment cancelled", {
      autoClose: 2000,
    });
  };

  const goToReviews = () => {
    navigate("/reviews");
  };

  const actionHandler = async (type) => {
    const initialToastID = toast.loading("Registering course");

    // add course to user's registered courses
    try {
      let response;

      if (type === "register") {
        response = await axios.post(`/register-course/${courseID}`);

        // if (response.data.message === "You've registered this course") {
        //   return toast.update(initialToastID, {
        //     render: response.data.message,
        //     type: "error",
        //     isLoading: false,
        //     autoClose: 3000,
        //   });
        // }

        if (currentUser) {
          let newUserCourses = currentUser.registered_courses;
          newUserCourses.push({
            average_test_score: 0,
            communityRank: 0,
            courseId: courseID,
            modules_completed: 0,
            progressLevel: 0,
            test_scores: [],
          });
          const newUserDocument = {
            ...currentUser,
            registered_courses: newUserCourses,
          };
          setIsRegistered(true);
          setCurrentUser(newUserDocument);
          setUser(newUserDocument);
          localStorage.setItem("user", JSON.stringify(newUserDocument));
        }
        toast.update(initialToastID, {
          render: response.data.message,
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      }

      if (type === "toClassroom") {
        navigate(`/classroom/${courseID}`);
      }

      if (type === "wishlist") {
        response = await axios.post(`/add-to-wishlist/${courseID}`);
      }
    } catch (err) {
      if (err.request?.status === 401) {
        navigate("/signin");
      }
      toast.update(initialToastID, {
        render: err.message,
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

  const registerBtnText = () => {
    let actionBtnText;
    if (isRegistered) {
      actionBtnText = "Start class";
    }
    if (courseDetail?.accessProtocol === "Free" && !isRegistered) {
      actionBtnText = "Register for free";
    }
    if (courseDetail?.accessProtocol === "Paid" && !isRegistered) {
      actionBtnText = "Buy this course now";
    }
    return actionBtnText;
  };

  return (
    <React.Fragment>
      <Nav />
      <ToastContainer />
      {courseDetail ? (
        <DescriptionWrapper ref={topViewPort}>
          <DescriptionHeader>
            {/* Course title */}
            <Typography variant="h4">{courseDetail?.title}</Typography>
            {/* Instructor name */}
            <Typography variant="h6">{courseDetail?.category}</Typography>
          </DescriptionHeader>

          <DescriptionBrief>
            {/* course preview video thumbnail */}
            <PreviewVideo>
              {/* video tag here... */}
              <ReactPlayer
                url={courseDetail?.preview_video.url}
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
            {/* primary properties */}
            <PrimaryDescription>
              <EvenButtons>
                <Button
                  onClick={() => {
                    if (isRegistered) {
                      return actionHandler("toClassroom");
                    }
                    if (!currentUser) {
                      return navigate("/signin");
                    }
                    if(courseDetail?.accessProtocol === "Free" && !isRegistered) {
                      return actionHandler('register')
                    }
                    paymentInitializer(onSuccess, onClose);
                  }}
                  variant="outlined"
                >
                  {registerBtnText()}
                </Button>
                <Button
                  onClick={() => actionHandler("wishlist")}
                  variant="outlined"
                >
                  Add to Wishlist
                </Button>
              </EvenButtons>
              <PrimaryDescWrapper>
                <PrimaryDescList>
                  {/* review */}
                  <PrimaryDescListItem>
                    <IoMdPricetags size={24} />
                    <Typography variant="h5" fontWeight={600}>
                      {courseDetail?.accessProtocol === "Paid" ? `NGN  + ${courseDetail?.price}` : "Free Course"}
                    </Typography>
                    {/* students count */}
                  </PrimaryDescListItem>
                  <PrimaryDescListItem>
                    <FiThumbsUp size={24} />
                    <Typography>
                      {courseDetail?.totalReviewers} Positive reviews
                    </Typography>
                    {/* students count */}
                  </PrimaryDescListItem>
                  <PrimaryDescListItem>
                    <BsPeople size={24} />
                    <Typography>
                      {courseDetail?.registered_students.length} students
                    </Typography>
                  </PrimaryDescListItem>
                  {/* course duration */}
                  <PrimaryDescListItem>
                    <LuFileVideo size={24} />
                    <Typography>
                      {courseDetail?.modules.length} Modules
                    </Typography>
                  </PrimaryDescListItem>
                  {/* download resources count */}
                  <PrimaryDescListItem>
                    <FaDownload size={24} />
                    <Typography>30 downloadable course materials</Typography>
                  </PrimaryDescListItem>
                  {/* certificate */}
                  <PrimaryDescListItem>
                    <TfiCup size={24} />
                    <Typography>Certificate of completetion</Typography>
                  </PrimaryDescListItem>
                </PrimaryDescList>
              </PrimaryDescWrapper>
            </PrimaryDescription>
          </DescriptionBrief>

          {/* Description text */}
          <DescTextSection>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Description
            </Typography>
            <Typography variant="subtitle">
              {courseDetail?.description}
            </Typography>
          </DescTextSection>

          {/* Course Content */}
          <CourseContentSection>
            {/* Text section */}
            <CourseContentText>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Course Contents
              </Typography>
            </CourseContentText>

            {/* Content List and dropdown section */}
            <div style={{ margin: "32px 0" }}>
              {courseDetail?.modules.map((content, index) => (
                <Module
                  playIndicator={false}
                  setIndex={setActiveIndex}
                  activeIndex={activeIndex}
                  moduleIndex={index}
                  moduleContent={content}
                  key={index}
                />
              ))}
            </div>
          </CourseContentSection>

          {/* Reviews section */}
          {/* <div style={{ margin: "32px 0" }}>
            <Typography variant="h5">Reviews</Typography>
            <Review rateValue={3.5} />
            <Review rateValue={2.5} />
            <Review rateValue={4} />
            <Review rateValue={5} />
            <Review rateValue={2} />
            <Button
              style={{ display: "flex", margin: "auto", width: 180 }}
              onClick={goToReviews}
              variant="contained"
            >
              View More
            </Button>
          </div> */}

          {/* Instructor profile */}
          <div style={{ marginTop: 42 }}>
            <Typography variant="h5">Instructor</Typography>
            <InstructorProfile
              focusedCourseID={courseID}
              info={courseDetail?.instructor}
              rateValue={4}
            />
          </div>

          {/* Related courses section */}
          {/* <Topcourses /> */}
        </DescriptionWrapper>
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

export default Description;
