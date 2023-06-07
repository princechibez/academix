import React from "react";
import "./nav.css";
import logopurple from "../../assets/images/logopurple.png";
import DP from "../../assets/images/instructor2.png";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Nav(props) {
  const navigate = useNavigate();

  const goToAuth = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className="nav" style={{boxSizing: 'border-box'}}>
      <div className="brand">
        <span className="logo">
          <img src={logopurple} alt="logo" width={35} />
        </span>
        <span className="brand-name">Academix</span>
      </div>
      {/* <div className="search">
        <input type="text" placeholder="Search" />
      </div> */}
      <Grid item sm={12} xs={24} style={{ width: 300 }}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="search"
          // onChange={inputHandler}
          label="Search"
          name="search"
          autoComplete="search"
        />
      </Grid>
      <div className="navigate">
        <span className="categories">Categories</span>
        <span className="about">About Us</span>
      </div>
      {props.authenticated ? (
        <Button
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            color: "#000000",
          }}
        >
          <img
            src={DP}
            alt="profile picture"
            height={50}
            width={50}
            style={{ backgroundPosition: "center", backgroundSize: "contain" }}
          />
          <Typography fontSize={18} fontWeight={500} variant="body2">Prince Chibez</Typography>
        </Button>
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
    </div>
  );
}
