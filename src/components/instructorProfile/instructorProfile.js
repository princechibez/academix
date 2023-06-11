import React from "react";
import { Rating, Typography } from "@mui/material";

import DP from "../../assets/images/instructor5.png";
import { ProfileWrap, ProfileerDP, ProfileDescriptions } from "./profileStyle";

function InstructorProfile(props) {
  return (
    <ProfileWrap>
      <ProfileerDP>
        <img
          src={DP}
          height="100%"
          width="100%"
          style={{ borderRadius: "50%" }}
        />
      </ProfileerDP>
      <ProfileDescriptions>
        <div>
          <Typography variant="h6">Babalola Kayode</Typography>
          <p>Senior Software Developer and Tech Book Author</p>
          <Rating readOnly value={props.rateValue} precision={0.5} />
        </div>

        <Typography variant="subtitle">
          Al Sweigart is a software developer and author. He has written eight
          programming books, spoken at Python conferences, and has taught both
          kids and adults how to program. Python is his favorite programming
          language, and he is the developer of several open source modules for
          it. He is driven to make programming knowledge available to all, and
          his books freely available under a Creative Commons license.
        </Typography>
      </ProfileDescriptions>
    </ProfileWrap>
  );
}

export default InstructorProfile;
