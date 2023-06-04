import * as React from "react";
import { TextField, Link, Grid, Box, Typography } from "@mui/material";


// import { GoogleSignIn, SignInBtn } from "../../components/authButton";
import Authpage from "../../assets/images/authpage_bg.jpg";
import { ForgotPassBtn } from "../../components/authButton";


export default function ForgotPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Grid
      container
      component="main"
      sx={{
        pl: 3,
        height: "100vh",
        backgroundImage: `url(${Authpage})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Box
        m="30px"
        sx={{
          my: 8,
          mx: 4,
          p: 9,
          width: "39%",
          display: "flex",
          flexDirection: "column",
          background: "white",
          borderRadius: "0px 0px 0px 80px",
          justifyContent: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Forgot Password
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="email"
                label="Enter your email address"
                name="email"
                autoComplete="email"
              />
            </Grid>
          </Grid>
          <ForgotPassBtn />
          <Grid container justifyContent="center">
            <Grid item>
              Back to{" "}
              <Link href="#" variant="body2">
                Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
}
