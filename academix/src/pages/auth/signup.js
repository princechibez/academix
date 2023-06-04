import * as React from "react";
import {
  TextField,
  Divider,
  Link,
  Grid,
  Box,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import { GoogleSignUp, SignUpBtn } from "../../components/authButton";
import Authpage from "../../assets/images/authpage_bg.jpg";

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
        maxWidth="500px"
        m="30px"
        sx={{
          my: 8,
          mx: 4,
          p: 7,
          display: "flex",
          flexDirection: "column",
          background: "white",
          borderRadius: "0px 0px 0px 100px",
          // alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="new-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? (
                          <VisibilityOutlinedIcon />
                        ) : (
                          <VisibilityOffOutlinedIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <SignUpBtn />
          <Divider>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              OR
            </Typography>
          </Divider>
          <GoogleSignUp />
          <Grid container justifyContent="center">
            <Grid item>
              Already have an account?{" "}
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
