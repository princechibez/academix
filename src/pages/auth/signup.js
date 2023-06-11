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
  FormGroup,
  FormControlLabel,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../utility/axios.config";
import { AuthContext } from "../../App";

import { useNavigate, useSearchParams } from "react-router-dom";
import { GoogleSignUp, SignUpBtn } from "../../components/authButton";
import Authpage from "../../assets/images/authpage_bg.jpg";
import { categories } from "../../model/categories";

export default function SignUp() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { setUser } = React.useContext(AuthContext);

  const [showPassword, setShowPassword] = React.useState(false);
  const [firstname, setFirstname] = React.useState();
  const [lastname, setLastname] = React.useState();
  const [email, setEmail] = React.useState();
  const [userInterests, setUserInterests] = React.useState([]);
  const [userLevel, setUserLevel] = React.useState("student");
  const [password, setPassword] = React.useState();
  const [dialogOpen, setDialogOpen] = React.useState(false);

  React.useEffect(() => {
    if (!params.get("registerAs")) {
      return navigate("/join-as");
    }
    setUserLevel(params.get("registerAs"));
  });

  // clear token after 24hrs
  const clearToken = () => {
    setTimeout(() => {
      localStorage.clear("token");
    }, 86400);
  };

  const inputHandler = (event, identifier) => {
    if (identifier === "firstname") {
      setFirstname(event.target.value);
    }
    if (identifier === "lastname") {
      setLastname(event.target.value);
    }
    if (identifier === "email") {
      setEmail(event.target.value);
    }
    if (identifier === "password") {
      setPassword(event.target.value);
    }
  };

  const handleCheckbox = (e, id) => {
    const value = e.target.value;
    let newInterests = [...userInterests];

    if (newInterests.includes(value)) {
      newInterests = newInterests.filter((int) => int !== value);
      return setUserInterests(newInterests);
    }
    newInterests.push(value);
    setUserInterests(newInterests);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Send signup request
    const initialToastID = toast.loading("We're Registering you...");
    try {
      // get the radio value appended to the url query
      if (userInterests.length === 0) {
        throw new Error("Please select at least one category");
      }
      const formData = {
        firstname,
        lastname,
        email,
        password,
        userLevel,
        user_interests: userInterests,
      };
      const response = await axios.post("/signup", JSON.stringify(formData), {
        headers: { "Content-Type": "application/json" },
      });
      let message;
      if (response.data.message === "user created") {
        message = "Registration successfull";
      }

      // save auth token to loacal storage
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("expiresIn", new Date().getUTCHours() + 1);
      setUser(JSON.stringify(response.data.data.newUser));
      localStorage.setItem("user", JSON.stringify(response.data.data.newUser));

      toast.update(initialToastID, {
        render: message,
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
      setDialogOpen(false);
      navigate("/");
      return clearToken();
    } catch (err) {
      if (err.message) {
        let errorMessage = err.message;
        if (err.message === "timeout of 10000ms exceeded") {
          errorMessage = "Request timeout";
          return toast.update(initialToastID, {
            render: errorMessage,
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
        } else if (err.message === "Request failed with status code 400") {
          if (err.response.data.message) {
            toast.update(initialToastID, {
              render: err.response.data.message,
              type: "error",
              isLoading: false,
              autoClose: 2000,
            });
          }
        } else {
          toast.update(initialToastID, {
            render: err.message,
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
        }
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
      <Box
        maxWidth="500px"
        sx={{
          mx: 1,
          p: 5,
          display: "flex",
          flexDirection: "column",
          background: "white",
          borderRadius: "0px 0px 0px 50px",
          // alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Sign up
        </Typography>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                autoComplete="given-name"
                name="firstName"
                onChange={(event) => inputHandler(event, "firstname")}
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
                onChange={(event) => inputHandler(event, "lastname")}
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
                onChange={(event) => inputHandler(event, "email")}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                name="password"
                onChange={(event) => inputHandler(event, "password")}
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
          <SignUpBtn submit={() => setDialogOpen(true)} />
          <Divider>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              OR
            </Typography>
          </Divider>
          {/* <GoogleSignUp /> */}
          <Grid container justifyContent="center">
            <Grid item textAlign="center">
              Already have an account?{" "}
              <Link href="/signin" variant="body2">
                Sign in
              </Link>
            </Grid>
          </Grid>
        </div>
      </Box>
      <ToastContainer />
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Select area of interests</DialogTitle>
        <DialogContent>
          <DialogContentText>
            We will use your selected areas of interest to fetch courses whose
            category falls within your interest
          </DialogContentText>
          <div
            style={{
              width: "100%",
              marginTop: 14,
              display: "flex",
              flexFlow: "row",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {categories.map((category, index) => (
              <FormControlLabel
                key={index}
                checked={userInterests.includes(category)}
                onChange={(e) => handleCheckbox(e, index)}
                style={{ width: "fit-content", padding: 8 }}
                control={<Checkbox />}
                label={category}
                value={category}
              />
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Signup</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
