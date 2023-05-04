import React from "react";
import "./Footer.css";
import logo from "./Assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="webpage-name">Aqua Life</h1>
        </div>
        <p className="footer-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
          fermentum ipsum. Sed placerat enim vitae risus molestie, vel blandit
          purus mattis. Ut venenatis nunc vitae felis lacinia faucibus.
        </p>
        <div className="social-icons">
          <a href="/">
            <FaFacebook />
          </a>
          <a href="/">
            <FaTwitter />
          </a>
          <a href="/">
            <FaInstagram />
          </a>
          <a href="/">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-right">
        <div className="company">
          <h2 className="topic-heading">Company</h2>
          <ul className="topic-list">
            <li>About us</li>
            <li>Our team</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="get-help">
          <h2 className="topic-heading">Get Help</h2>
          <ul className="topic-list">
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
