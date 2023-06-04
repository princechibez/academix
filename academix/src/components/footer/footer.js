import React from "react";
import "../footer/footer.css";
import logowhite from "../../assets/logowhite.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-nav">
        <div className="footer-logo">
          <img src={logowhite} alt="logo" width={35} />
          <span>Academix</span>
        </div>
        <div className="us">
          <div className="nav-title">
            Who We Are
            <hr />
          </div>
          <p className="nav-options">About Us</p>
          <p className="nav-options">Our Values</p>
          <p className="nav-options">Careers</p>
          <p className="nav-options">Affiliates</p>
        </div>
        <div className="support">
          <div className="nav-title">
            Support
            <hr className="nav-line" />
          </div>
          <p className="nav-options">Contact</p>
          <p className="nav-options">Help Center</p>
          <p className="nav-options">FAQs</p>
        </div>
        <div className="socials">
          <div className="nav-title">
            Follow Us
            <hr />
          </div>
          <p className="nav-options">Instagram</p>
          <p className="nav-options">Twitter</p>
          <p className="nav-options">Facebook</p>
          <p className="nav-options">Tik-tok</p>
        </div>
      </div>
      <hr className="copyright-line" />
      <div className="copyright">
        &copy; Copyright 2023, Academix. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
