import React, { useContext, useEffect, useState } from "react";
import { Typography, Rating, Skeleton, Box, Button } from "@mui/material";
import { createSearchParams, useNavigate } from "react-router-dom";

import "./listStyles.css";
import { FaSave } from "react-icons/fa";
import { AuthContext } from "../../App";

function List(props) {
  const { user } = useContext(AuthContext);
  const [currentUser, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(user));
  }, []);

  const goToDetails = (courseID) => {
    navigate(`/course-description/${courseID}`);
  };

  const editCourseHandler = (ID) => {
    navigate(`/dashboard/instructor/create-course?mode=edit&courseID=${ID}`);
  };

  const data = props.data?.slice(0, 9);
  return (
    <div className="list">
      {data
        ? data.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                item.instructor === currentUser?.instructorID
                  ? editCourseHandler(item._id)
                  : goToDetails(item._id);
              }}
              className="card"
            >
              <div
                style={{
                  height: "55%",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                <img
                  style={{ objectFit: "cover" }}
                  src={item.thumbnail.url}
                  height="100%"
                  width="100%"
                  alt="Software development"
                />
              </div>
              <div
                style={{
                  width: "90%",
                  paddingLeft: 10,
                  boxSizing: "border-box",
                }}
              >
                <Typography variant="body1">{item.category}</Typography>
                <Typography
                  variant="body1"
                  lineHeight={1.2}
                  maxWidth="90%"
                  sx={{ pb: 2, WebkitLineClamp: 2 }}
                  fontWeight={600}
                  fontSize={16}
                >
                  {item.title}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    alignSelf: "flex-start",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Rating
                    readOnly
                    value={item.averageRateValue}
                    precision={0.5}
                  />
                  <Typography fontWeight={600}>NGN {item.price}</Typography>
                </div>
              </div>
              {/* {item.instructor === currentUser?.instructorID && (
                <div style={{ display: "flex", gap: 12 }}>
                  {item.draft && (
                    <Button
                      variant="contained"
                      sx={{ alignSelf: "flex-end" }}
                      startIcon={<FaSave size={14} />}
                    >
                      Draft
                    </Button>
                  )}
                </div>
              )} */}
            </div>
          ))
        : [..."12345678"].map((el, i) => (
            <Box
              key={i}
              sx={{
                height: 250,
                width: 280,
                display: "flex",
                flexFlow: "column",
                pr: 2,
              }}
            >
              <Skeleton
                animation="wave"
                variant="rectangular"
                width="100%"
                height="60%"
              />
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
          ))}
    </div>
  );
}

export default List;
