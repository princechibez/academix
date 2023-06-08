import * as React from "react";
import {
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../utility/axios.config";
import jwt_decode from "jwt-decode";

import { ResetPassBtn } from "../../components/authButton";
import Authpage from "../../assets/images/authpage_bg.jpg";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function ResetPassword() {
  // URL parameter and query handlers...
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const [password, setPassword] = React.useState();
  const [confirmPassword, setConfirmPassword] = React.useState();
  const [showPassword, setShowPassword] = React.useState(false);

  React.useEffect(() => {
    try {
      const decoded_token = jwt_decode(params.get("token"));
      if (!decoded_token.data.userIdentityVerified) {
        navigate("/wrong-page");
      }
    } catch (err) {
      navigate("/wrong-page");
    }
  }, []);

  const inputHandler = (e, id) => {
    if (id === "password") {
      setPassword(e.target.value);
    }
    if (id === "confirm") {
      setConfirmPassword(e.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const data = { email, password }; // real sample...
    const data = { email: "chibezprince@gmail.com", password };

    const initialToastID = toast.loading("Resetting password...");

    if (password !== confirmPassword) {
      return toast.update(initialToastID, {
        render: "Passwords not equal",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
    // Send signup request
    try {
      const response = await axios.post(
        "/reset-password",
        JSON.stringify(data),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.update(initialToastID, {
        render: response.data.message,
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });

      setTimeout(() => {
        navigate("/reset-password-successfull");
      }, 1000);
    } catch (err) {
      toast.update(initialToastID, {
        render: err.response.data.message || err.message,
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid
      container
      component="main"
      sx={{
        px: 3,
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
        maxWidth="500px"
        sx={{
          // mx: 1,
          px: 5,
          py: 6,
          display: "flex",
          flexDirection: "column",
          background: "white",
          borderRadius: "0px 0px 0px 50px",
          justifyContent: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                name="password"
                label="Enter a new password"
                onChange={(e) => inputHandler(e, "password")}
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
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                name="password"
                label="Confirm new password"
                onChange={(e) => inputHandler(e, "confirm")}
                type={showPassword ? "text" : "password"}
                id="new-password"
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
          </Grid>
          <ResetPassBtn />
          <Grid container justifyContent="center">
            <Grid item>
              Back to{" "}
              <Link href="#" variant="body2">
                Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <ToastContainer />
    </Grid>
  );
}
