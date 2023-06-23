import React, { useEffect } from "react";
import "./courseListStyles.css";
import orangeline from "../../assets/images/orangeline.png";
import purpleline from "../../assets/images/purpleline.png";
import { Pagination, Typography } from "@mui/material";
import List from "../list/list";

export default function CoursesList(props) {
  useEffect(() => {}, [props.data, props.headline]);

  return (
    <div className="courses">
      <div className="headline">
        <Typography variant="h4">{props?.headline}</Typography>
        <div className="lines">
          <img src={orangeline} alt="orange line" />
          <img src={purpleline} alt="purple line" />
        </div>
      </div>
      {/* List of courses */}
      <List data={props.data} />
      <div
        style={{ margin: "32px 0", display: "flex", justifyContent: "center" }}
      >
        <Pagination
          onChange={(e, v) => props.pageChanged(v)}
          count={props.pageCount}
          size="large"
        />
      </div>
      {/* <Button
        sx={{
          display: "flex",
          margin: "32px auto",
          width: 300,
          padding: "14px 0",
        }}
        variant="contained"
      >
        View More
      </Button> */}
    </div>
  );
}
