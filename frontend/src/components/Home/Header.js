import React from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div className="header-container">
      <a href="/" className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="webpage-name">Aqua Life</h1>
      </a>
      <div className="tab-container">
        <a href="/" className="tab">
          Features
        </a>
        <a href="/" className="tab">
          Pricing
        </a>
        <a href="/" className="tab">
          Community
        </a>
        <a href="/" className="tab">
          Support
        </a>
      </div>
      {/* <div className="button-container">
        <a href="/user-login" className="button login-button">
          Login
        </a>
        <a href="/" className="button login-button">
          Logout
        </a>
        <a href="/user-register" className="button signup-button">
          Sign Up
        </a>
      </div> */}

       <NavDropdown title="Features" id="navbarScrollingDropdown">
              {/* <NavDropdown.Item ><Link to='/category'>Product</Link></NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item  href="/">
                Logout
              </NavDropdown.Item>
              <NavDropdown.Item   href="/user-login">
                LogIn
              </NavDropdown.Item>
            </NavDropdown>
    </div>
  );
}

export default Header;
