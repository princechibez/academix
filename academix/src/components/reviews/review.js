import React from "react";
import { Rating, Typography } from "@mui/material";

import DP from "../../assets/images/instructor2.png";
import { ReviewWrap, ReviewerDP, ReviewDescriptions } from "./reviewStyles";

function Review(props) {
  return (
    <ReviewWrap>
      <ReviewerDP>
        <img
          src={DP}
          height="100%"
          width="100%"
          style={{ borderRadius: "50%" }}
        />
      </ReviewerDP>
      <ReviewDescriptions>
        <div>
          <Typography variant="h6">Babalola Kayode</Typography>
          <p>1 week ago</p>
          <Rating readOnly value={props.rateValue} precision={0.5} />
        </div>

        <Typography variant="subtitle">
          I recently had the opportunity to take a course that I found
          incredibly interesting, and I just had to share my thoughts on it.
          This course truly exceeded my expectations and provided a fantastic
          learning experience from start to finish.
        </Typography>
      </ReviewDescriptions>
    </ReviewWrap>
  );
}

export default Review;
