import React from "react";
import { Button, Typography } from "@mui/material";
import { FiThumbsUp } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { LuFileVideo } from "react-icons/lu";
import { FaDownload, FaFileDownload } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

import PreviewImg from "../../assets/images/adobe.png";
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
import Topcourses from "../../components/topCourses/topCourses";
import Module from "../../components/courseModuleList/moduleList";
import { course } from "../../model/courses";
import Review from "../../components/reviews/review";
import InstructorProfile from "../../components/instructorProfile/instructorProfile";

const Description = () => {
  const navigate = useNavigate();

  const goToReviews = () => {
    navigate("/reviews");
  };

  return (
    <React.Fragment>
      <Nav />
      <DescriptionWrapper>
        <DescriptionHeader>
          {/* Course title */}
          <Typography variant="h4">
            Foundation course to understand software development
          </Typography>
          {/* Instructor name */}
          <Typography variant="h6">Web Dan</Typography>
        </DescriptionHeader>

        <DescriptionBrief>
          {/* course preview video thumbnail */}
          <PreviewVideo>
            {/* video tag here... */}
            <MediaElement src={PreviewImg} height="100%" width="100%" />
          </PreviewVideo>
          {/* primary properties */}
          <PrimaryDescription>
            <EvenButtons>
              <Button variant="contained">Start</Button>
              <Button variant="outlined">Add to Wishlist</Button>
            </EvenButtons>
            <PrimaryDescWrapper>
              <PrimaryDescList>
                {/* review */}
                <PrimaryDescListItem>
                  <FiThumbsUp size={20} />
                  <Typography>96% Positive reviews</Typography>
                  {/* students count */}
                </PrimaryDescListItem>
                <PrimaryDescListItem>
                  <BsPeople size={20} />
                  <Typography>234,374 students</Typography>
                </PrimaryDescListItem>
                {/* course duration */}
                <PrimaryDescListItem>
                  <LuFileVideo size={20} />
                  <Typography>19 course videos</Typography>
                </PrimaryDescListItem>
                {/* download resources count */}
                <PrimaryDescListItem>
                  <FaDownload size={20} />
                  <Typography>30 downloadable course materials</Typography>
                </PrimaryDescListItem>
                {/* certificate */}
                <PrimaryDescListItem>
                  <TfiCup size={20} />
                  <Typography>Certificate of completetion</Typography>
                </PrimaryDescListItem>
              </PrimaryDescList>
            </PrimaryDescWrapper>
            <Typography variant="h6">
              Programming | Software Development
            </Typography>
          </PrimaryDescription>
        </DescriptionBrief>

        {/* Description text */}
        <DescTextSection>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Introduction to Software Development
          </Typography>
          <Typography variant="subtitle">
            Develop with front-end development languages and tools such as HTML,
            CSS, JavaScript, React and Bootstrap, Deploy and scale applications
            using Cloud Native methodologies and tools like Containers,
            Kubernetes, Microservices and Serverless Functions. Program
            applications using back-end languages and frameworks like Express,
            Node.js, Python, Django, etc. Build your GitHub portfolio by
            applying your Full Stack Cloud Development skills with multiple labs
            and hands-on projects, including a capstone.
          </Typography>
        </DescTextSection>

        {/* Course Content */}
        <CourseContentSection>
          {/* Text section */}
          <CourseContentText>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Course Contents
            </Typography>
            <Typography variant="subtitle">
              Prepare for a new career in the high-growth field of project
              management, no experience or degree required. Get professional
              training designed by Google and get on the fastrack to a
              competitively paid job.
            </Typography>
          </CourseContentText>

          {/* Content List and dropdown section */}
          <div style={{ margin: "32px 0" }}>
            {course.modules.map((content, index) => (
              <Module moduleContent={content} key={index} />
            ))}
          </div>
        </CourseContentSection>

        {/* Reviews section */}
        <div style={{ margin: "32px 0" }}>
          <Typography variant="h5">Reviews</Typography>
          <Review rateValue={3.5} />
          <Review rateValue={2.5} />
          <Review rateValue={4} />
          <Review rateValue={5} />
          <Review rateValue={2} />
          <Button
            style={{ display: "flex", margin: "auto", width: 180 }}
            onClick={goToReviews}
            variant="outlined"
          >
            View More
          </Button>
        </div>

        {/* Instructor profile */}
        <div style={{ marginTop: 42 }}>
          <Typography variant="h5">Instructor</Typography>
          <InstructorProfile rateValue={4} />
        </div>

        {/* Related courses section */}
        {/* <Topcourses /> */}
      </DescriptionWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default Description;
