import React from "react";
import "../heroSection/main.css";
import Star from "../../assets/images/Star.png";
import Star1 from "../../assets/images/Star1.png";
import Star2 from "../../assets/images/Star2.png";
import Star3 from "../../assets/images/Star3.png";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="left">
        {/* <div className="top-left"> */}
        <Typography variant="h2">
          Unlock Your <span className="potential">Potential,</span> Embrace
          Knowledge
        </Typography>
        {/* </div> */}
        {/* <div className="bottom">
          <div className="bottom-left"> */}
        <Typography variant="body1">
          Discover a world of endless possibilities with our cutting-edge
          <br /> Learning Management System. Dive into engaging courses,
          <br /> interactive resources, and personalized learning paths. Join us{" "}
          <br /> today and empower your future!
        </Typography>
        <Button onClick={() => navigate("/join-as")} variant="contained">
          Join Now
        </Button>
        {/* </div>
        </div> */}
      </div>
      <div className="right">
        <img
          src={Star2}
          alt="A man staring at a computer"
          className="image-3"
        />
        <img src={Star3} alt="A lady on computer" className="image-4" />

        {/* <div className="top-right"> */}
        <img src={Star} alt="A boy on computer" className="image-1" />
        <img src={Star1} alt="A smiling lady" className="image-2" />
        {/* </div> */}
      </div>
    </div>
  );
}
