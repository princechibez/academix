import * as React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Image } from "mui-image";

import { Success } from "../../components/authButton";
import Authpage from "../../assets/images/authpage_bg.jpg";
import Balloon from "../../assets/images/balloon.png";

export default function ResetSuccessful() {
  // const handleSubmit = (event) => { };

  return (
    <Grid
      container
      component="main"
      sx={{
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        sx={{
          backgroundImage: `url(${Authpage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          filter: "blur(15px)",
        }}
      />
      <Box
        maxWidth="600px"
        m="30px"
        sx={{
          position: "relative",
          // my: 8,
          // mx: 4,
          p: 7,
          display: "flex",
          flexDirection: "column",
          background: "white",
          borderRadius: "0px 80px 0px 80px",
          alignItems: "center",
          gap: 1.5,
          top: "-540px",
        }}
      >
        <Image src={Balloon} easing={100} duration={400} />
        <Typography variant="body2" container sx={{ textAlign: "center" }}>
          Congratulations you have <br /> successfully changed your password.
        </Typography>

        <Success />
      </Box>
    </Grid>
  );
}
