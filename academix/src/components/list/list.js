import React from "react";
import { Typography, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./listStyles.css";

function List(props) {
  const navigate = useNavigate();

  const goToDetails = (courseID) => {
    navigate(`/course-description/${courseID}`);
  };


  const data = props.data.slice(0, 9);
  return (
    <div className="list">
      {data.map((item, index) => (
        <div onClick={() => goToDetails(item._id)} className="card">
          <img
            src={item.thumbnail}
            style={{ backgroundPosition: "center", backgroundSize: "contain" }}
            height="60%"
            width="100%"
            alt="Software development"
          />
          <div className="info-wrap">
            <Typography variant="body1">{item.category}</Typography>
            <Typography variant="h6" lineHeight={1.2}>
              {item.title}
            </Typography>
            <Rating readOnly value={item.averageRateValue} precision={0.5} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
