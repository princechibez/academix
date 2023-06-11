import * as React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { Image } from "mui-image";

import { Success } from "../components/authButton";
import Authpage from "../assets/images/authpage_bg.jpg";
import Balloon from "../assets/images/balloon.png";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  // const handleSubmit = (event) => { };
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

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
        <Typography variant="h5" container sx={{ textAlign: "center" }}>
          Page not Found
        </Typography>

        <Button
          type="submit"
          fullWidth
          variant="outlined"
          onClick={goToHome}
          sx={{ mt: 2, mb: 2, height: "40px", p: 0 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary.main",
              fontWeight: "Bold",
            }}
          >
            Go to Homepage
          </Typography>
        </Button>
      </Box>
    </Grid>
  );
}
