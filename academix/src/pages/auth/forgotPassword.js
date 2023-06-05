import * as React from "react";
import {
  TextField,
  Link,
  Grid,
  Box,
  Typography,
} from "@mui/material";

import { ForgotPassBtn,} from "../../components/authButton";
import Authpage from "../../assets/images/authpage_bg.jpg";

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
        px: 4,
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
      <Grid
        md={5}
        xs={{mx: 0}}
        maxWidth="500px"
        sx={{
          mx: 1,
          p: 5,
          display: "flex",
          flexDirection: "column",
          background: "white",
          borderRadius: "0px 0px 0px 50px",
          justifyContent: "cemter",
        }}
      >
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end" sx={{ mt: 1 }}>
            <Grid item>
              <Link href="#" variant="body2">
                Forgot Password?
              </Link>
            </Grid>
          </Grid>
          <ForgotPassBtn/>
          <Grid container justifyContent="center">
            <Grid item textAlign="center" pb={2}>
              Back to{" "}
              <Link href="#" variant="body2">
                Signin
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
