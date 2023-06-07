import React, { useState } from "react";
import "./form.css";
import mainlogo from "../../assets/images/mainlogo.png";
import { Button, Radio } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  const [selectedValue, setSelectedValue] = useState("student");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const goToAuth = (path) => {
    navigate({ pathname: `/${path}`, search: `?registerAs=${selectedValue}` });
  };

  return (
    <div className="form-container">
      <div className="nav-logo">
        <img src={mainlogo} alt="logo" width={80} />
      </div>
      <div className="form">
        <div className="join">
          <h1>Joining as?</h1>
        </div>
        <form>
          <div
            onClick={() => setSelectedValue("student")}
            className="student-option"
          >
            {/* <span className="input">
            <input type="radio" name="identity" value="student" />
          </span> */}
            <Radio
              checked={selectedValue === "student"}
              onChange={handleChange}
              value="student"
              // name="radio-button-demo"
              // inputProps={{ "aria-label": "A" }}
            />
            <span className="student">A Student</span>
          </div>
          <div
            onClick={() => setSelectedValue("instructor")}
            className="instructor-option"
          >
            <Radio
              checked={selectedValue === "instructor"}
              onChange={handleChange}
              value="instructor"
              // name="radio-button-demo"
              // inputProps={{ "aria-label": "A" }}
            />
            <span className="instructor">A Instructor</span>
          </div>
          <Button
            onClick={() => goToAuth("signup")}
            variant="contained"
            style={{ color: "#FFFFFF", width: "100%", padding: 14 }}
          >
            Create Account
          </Button>
          <p class="account-login">
            Already have an account&#63;
            <span onClick={() => goToAuth("signin")} className="signin-link">
              {" "}
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Form;
