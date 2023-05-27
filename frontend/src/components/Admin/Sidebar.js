import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { NavDropdown } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
      <a href="/" className="logo-container">
        <img src={logo} alt="logo" className="logo" />
        <h3 className="sidebar-title">Aqua Life</h3>
        </a>
      </div>
      <div className="sidebar-nav">
        <ul className="sidebar-links">
          <li>
            <NavLink to="/allproduct" exact activeClassName="active-link">
              <i  aria-hidden="true"></i> Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/allquality" exact activeClassName="active-link">
              <i  aria-hidden="true"></i> Water Treatments
            </NavLink>
          </li>
          <li>
            <NavLink to="/innovationAdmin" activeClassName="active-link">
              <i  aria-hidden="true"></i> Innovations
            </NavLink>
          </li>
          <li>
            <NavLink to="/innovationSupAdmin" activeClassName="active-link">
              <i  aria-hidden="true"></i> Innovation
              Support
            </NavLink>
          </li>
          <li>
          <NavDropdown className="px-2" title={<span>Donations</span>}>
            <NavDropdown.Item as={NavLink} to="/laborListForAdmin" activeClassName="active-link" style={{color:"darkblue"}}>
              Labor Donations
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/paymentList" activeClassName="active-link"style={{color:"darkblue"}}>
              Payment Donations
            </NavDropdown.Item>
          </NavDropdown>
        </li>

    
          <li>
            <NavLink to="/admin-createProject" activeClassName="active-link">
              <i  aria-hidden="true"></i>{" "}
              projectManagement
            </NavLink>
          </li>
          <li>
            <NavLink to="/articleAdmin" activeClassName="active-link">
              <i  aria-hidden="true"></i> Article
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/innovationReport" activeClassName="active-link">
              <i className="fa fa-download" aria-hidden="true"></i> Report
            </NavLink>
          </li> */}
          <li>
          <NavDropdown className="px-2" title={<span>Reports</span>}>
            <NavDropdown.Item as={NavLink} to="/innovationReport" activeClassName="active-link" style={{color:"darkblue"}}>
              Innovations
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/reportProject" activeClassName="active-link"style={{color:"darkblue"}}>
              Projects
            </NavDropdown.Item>
             <NavDropdown.Item as={NavLink} to="/articleReportList" activeClassName="active-link"style={{color:"darkblue"}}>
             Artical
            </NavDropdown.Item>
          </NavDropdown>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
