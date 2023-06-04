import React from 'react'
import { Button, Typography} from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
 

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
        height: "50px",
        color: "white",
        fontWeight: "Bold",

      }}
    >
      Sign In
    </Button>
  );
}

export const SignUpBtn = () => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      size="large"
      sx={{
        mt: 3,
        mb: 2,
        height: "50px",
        color: "white",
        fontWeight: "Bold",
      }}
    >
      Sign Up
    </Button>
  );
}

export const ForgotPassBtn = () => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      size="large"
      sx={{
        mt: 3,
        mb: 2,
        height: "50px",
        color: "white",
        fontWeight: "Bold",
      }}
    >
      Request reset link
    </Button>
  );
};

export const Success = () => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="outlined"
      sx={{ mt: 2, mb: 2, height: "50px" }}
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
        height: "50px",
        color: "white",
        fontWeight: "Bold",
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
      sx={{ mt: 2, mb: 2, height: "50px",  }}
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
        sx={{ mt: 2, mb: 2, height: "50px",  }}
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

