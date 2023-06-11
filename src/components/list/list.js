import React from "react";
import { Typography, Rating, Skeleton, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./listStyles.css";

function List(props) {
  const navigate = useNavigate();

  const goToDetails = (courseID) => {
    navigate(`/course-description/${courseID}`);
  };

  const data = props.data?.slice(0, 9); 
  return (
    <div className="list">
      {data
        ? data.map((item, index) => (
            <div onClick={() => goToDetails(item._id)} className="card">
              <div
                style={{
                  height: "60%",
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
              <div className="info-wrap">
                <Typography variant="body1">{item.category}</Typography>
                <Typography variant="h6" lineHeight={1.2}>
                  {item.title}
                </Typography>
                <Rating
                  readOnly
                  value={item.averageRateValue}
                  precision={0.5}
                />
              </div>
            </div>
          ))
        : [..."123456789"].map((el, i) => (
            <Box
              key={i}
              sx={{
                height: 350,
                width: 350,
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
