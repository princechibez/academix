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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../utility/axios.config";
import { AuthContext } from "../../App";

import { SignInBtn } from "../../components/authButton";
import Authpage from "../../assets/images/authpage_bg.jpg";
import { useNavigate } from "react-router-dom";
import { LocalSessionTracker } from "../../utility/logoutTimer";

export default function SignIn() {
  const { setUser } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      return navigate("/"); // should go to dashboard
    }
  }, []);

  const inputHandler = (event, identifier) => {
    if (identifier === "email") {
      setEmail(event.target.value);
    }
    if (identifier === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = { email, password };

    const initialToastID = toast.loading("Loggin in...");
    // Send signup request
    try {
      const response = await axios.post("/login", JSON.stringify(formData), {
        headers: { "Content-Type": "application/json" },
      });

      // save auth and userproperties token to loacal storage
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("expiresIn", new Date().getUTCHours());
      setUser(JSON.stringify(response.data.data.user));
      localStorage.setItem("user", JSON.stringify(response.data.data.user));

      toast.update(initialToastID, {
        render: response.data.message,
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
      if (response.data.data.user.userLevel === "instructor") {
        navigate("/dashboard/instructor/courses");
      } else {
        navigate("/courses");
      }
      return LocalSessionTracker()
    } catch (err) {
      if (err.message === "timeout of 10000ms exceeded") {
        return toast.update(initialToastID, {
          render: "Request timeout",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      } else if (err.message === "Request failed with status code 400") {
        toast.update(initialToastID, {
          render: err.response.data.message,
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      } else {
        toast.update(initialToastID, {
          render: err.message,
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      }
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
        maxWidth="500px"
        sx={{
          // mx: 1,
          p: 5,
          display: "flex",
          flexDirection: "column",
          background: "white",
          borderRadius: "0px 0px 0px 50px",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="email"
                onChange={(event) => inputHandler(event, "email")}
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                onChange={(event) => inputHandler(event, "password")}
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
          </Grid>
          <Grid container justifyContent="flex-end" sx={{ mt: 1 }}>
            <Grid item>
              <Link href="/forgot-password" variant="body2">
                Forgot Password?
              </Link>
            </Grid>
          </Grid>
          <SignInBtn />
          <Divider>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              OR
            </Typography>
          </Divider>
          {/* <GoogleSignIn /> */}
          <Grid container justifyContent="center">
            <Grid item textAlign="center" pb={2}>
              Already have an account?{" "}
              <Link href="/join-as" variant="body2">
                Sign up for one!
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <ToastContainer />
    </Grid>
  );
}
