import React, { useContext, useEffect, useState } from "react";
import "./nav.css";
import logopurple from "../../assets/images/logopurple.png";
import DP from "../../assets/images/instructor2.png";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../App";

import { categories } from "../../model/categories";

export default function Nav(props) {
  const { user, token, setToken } = useContext(AuthContext);

  const [searchQuery, setSearchQuery] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState("");
  const [userProfile, setUserProfile] = useState();

  useEffect(() => {
    setUserProfile(JSON.parse(user));
  });

  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuSelect = (menuType) => {
    if (menuType === "profile") {
      navigate("/profile");
    }

    if (menuType === "logout") {
      setToken(null);
      localStorage.clear("token");
      toast.info("Logout Succcessfull", {
        autoClose: 1000,
      });
    }
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
    navigate(`/courses?query=${searchQuery}&category=${category}`);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/courses?query=${searchQuery}&category=${category}`);
  };

  const searchInputHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  const goToAuth = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className="nav" style={{ boxSizing: "border-box" }}>
      <div onClick={() => navigate("/")} className="brand">
        <span className="logo">
          <img src={logopurple} alt="logo" width={35} />
        </span>
        <span className="brand-name">Academix</span>
      </div>
      {/* <div className="search">
        <input type="text" placeholder="Search" />
      </div> */}
      <Grid item sm={12} xs={24} style={{ width: 300 }}>
        <Box component="form" onSubmit={handleSearch}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="search"
            onChange={searchInputHandler}
            label="Search"
            name="search"
            autoComplete="search"
          />
        </Box>
      </Grid>
      <div className="category">
        {/* <span className="categories">Categories</span> */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={categoryChangeHandler}
          >
            {categories.map((category, i) => (
              <MenuItem key={i} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {token || localStorage.getItem("token") ? (
        <div>
          <Button
            onClick={handleClick}
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              color: "#000000",
            }}
          >
            <img
              src={userProfile?.profilePicture.url}
              alt="profile picture"
              height={50}
              width={50}
              style={{
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
            />
            <Typography fontSize={18} fontWeight={500} variant="body2">
              {userProfile?.firstname} {userProfile?.lastname}
            </Typography>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleMenuSelect("profile")}>
              My Profile
            </MenuItem>
            <MenuItem onClick={() => handleMenuSelect("logout")}>
              Logout
            </MenuItem>
          </Menu>
        </div>
      ) : (
        <div className="buttons">
          <Button onClick={() => goToAuth("join-as")} variant="contained">
            Sign Up
          </Button>
          <Button onClick={() => goToAuth("signin")} variant="outlined">
            Sign In
          </Button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
