import React from "react";
import { Button, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

export const SignInBtn = () => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      size="large"
      sx={{
        mt: 3,
        mb: 2,
        height: "45px",
        color: "white",
        fontWeight: "Bold",
        p: 0,
      }}
    >
      Sign In
    </Button>
  );
};

export const SignUpBtn = (props) => {
  return (
    <Button
      onClick={props.submit}
      type="submit"
      fullWidth
      variant="contained"
      size="large"
      sx={{
        mt: 3,
        mb: 2,
        height: "45px",
        color: "white",
        fontWeight: "Bold",
        p: 0,
      }}
    >
      Continue
    </Button>
  );
};

export const ForgotPassBtn = (props) => {
  return (
    <Button
      type="submit"
      fullWidth
      onClick={props.onclick}
      variant="contained"
      size="large"
      sx={{
        mt: 3,
        mb: 2,
        height: "45px",
        color: "white",
        fontWeight: "Bold",
        p: 0,
      }}
    >
      Request reset link
    </Button>
  );
};

export const Success = (props) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="outlined"
      onClick={props.clicked}
      sx={{ mt: 2, mb: 2, height: "40px", p: 0 }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary.main",
          fontWeight: "Bold",
        }}
      >
        Continue to signin
      </Typography>
    </Button>
  );
};

export const ResetPassBtn = () => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      size="large"
      sx={{
        mt: 3,
        mb: 2,
        height: "40px",
        color: "white",
        fontWeight: "Bold",
        p: 0,
      }}
    >
      Reset password
    </Button>
  );
};

export const GoogleSignIn = () => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="outlined"
      sx={{ mt: 2, mb: 2, height: "45px", p: "2px" }}
      startIcon={<FcGoogle size={20} />}
    >
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary.main",
          fontWeight: "Bold",
        }}
      >
        Sign in with google
      </Typography>
    </Button>
  );
};

export const GoogleSignUp = () => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="outlined"
      sx={{ mt: 2, mb: 2, height: "40px", px: "0px" }}
      startIcon={<FcGoogle size={20} />}
    >
      <Typography
        variant="body2"
        sx={{ color: "text.secondary.main", fontWeight: "Bold" }}
      >
        Sign up with google
      </Typography>
    </Button>
  );
};
