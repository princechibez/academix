import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { FiThumbsUp } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { LuFileVideo } from "react-icons/lu";
import { FaDownload, FaFileDownload } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { useNavigate, useParams } from "react-router-dom";

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
import Module from "../../components/courseModuleList/moduleList";
import { course } from "../../model/course";
import Review from "../../components/reviews/review";
import InstructorProfile from "../../components/instructorProfile/instructorProfile";
import axios from "../../utility/axios.config";

const Description = () => {
  const navigate = useNavigate();
  const { courseID } = useParams();

  const [courseDetail, setCourseDetail] = useState();

  useEffect(() => {
    const fetchCourseDetails = async () => {
      const res = await axios.get(`/fetch-course-details/${courseID}`);
      setCourseDetail(res.data.data);
    };
    fetchCourseDetails();
  }, []);

  const goToReviews = () => {
    navigate("/reviews");
  };

  return (
    <React.Fragment>
      <Nav />
      {courseDetail && (
        <DescriptionWrapper>
          <DescriptionHeader>
            {/* Course title */}
            <Typography variant="h4">{courseDetail.title}</Typography>
            {/* Instructor name */}
            <Typography variant="h6">{courseDetail.category}</Typography>
          </DescriptionHeader>

          <DescriptionBrief>
            {/* course preview video thumbnail */}
            <PreviewVideo>
              {/* video tag here... */}
              <MediaElement src={courseDetail.thumbnail.url} height="100%" width="100%" />
            </PreviewVideo>
            {/* primary properties */}
            <PrimaryDescription>
              <EvenButtons>
                <Button variant="contained">Register</Button>
                <Button variant="outlined">Add to Wishlist</Button>
              </EvenButtons>
              <PrimaryDescWrapper>
                <PrimaryDescList>
                  {/* review */}
                  <PrimaryDescListItem>
                    <FiThumbsUp size={20} />
                    <Typography>{courseDetail.totalReviewers} Positive reviews</Typography>
                    {/* students count */}
                  </PrimaryDescListItem>
                  <PrimaryDescListItem>
                    <BsPeople size={20} />
                    <Typography>{courseDetail.registered_students.length} students</Typography>
                  </PrimaryDescListItem>
                  {/* course duration */}
                  <PrimaryDescListItem>
                    <LuFileVideo size={20} />
                    <Typography>{courseDetail.modules.length} Modules</Typography>
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
            </PrimaryDescription>
          </DescriptionBrief>

          {/* Description text */}
          <DescTextSection>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Description
            </Typography>
            <Typography variant="subtitle">
              {courseDetail.description}
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
              {courseDetail.modules.map((content, index) => (
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
      )}
      <Footer />
    </React.Fragment>
  );
};

export default Description;
