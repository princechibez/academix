import React from "react";
import "./form.css";
import mainlogo from "../../assets/images/mainlogo.png";

function Form() {
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
        <div className="student-option">
          <span className="input">
            <input type="radio" name="identity" value="student" />
          </span>
          <span className="student">A Student</span>
        </div>
        <div className="instructor-option">
          <span className="input">
            <input type="radio" name="identity" value="instructor" />
          </span>
          <span className="instructor">An Instructor</span>
        </div>
        <input type="button" value="Create Account" />
        <p class="account-login">
          Already have an account&#63;
          <span className="signin-link"> Sign In</span>
        </p>
      </form>
    </div>
    </div>
    
  );
}

export default Form;
