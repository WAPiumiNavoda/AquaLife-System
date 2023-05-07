import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <h3 className="sidebar-title">Aqua Life</h3>
      </div>
      <div className="sidebar-nav">
        <ul className="sidebar-links">
          <li>
            <NavLink to="/" exact activeClassName="active-link">
              <i className="fa fa-home" aria-hidden="true"></i> Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/allquality" exact activeClassName="active-link">
              <i className="fa fa-home" aria-hidden="true"></i> Water Treatments
            </NavLink>
          </li>
          <li>
            <NavLink to="/innovationAdmin" activeClassName="active-link">
              <i className="fa fa-info" aria-hidden="true"></i> Innovations
            </NavLink>
          </li>
          <li>
            <NavLink to="/innovationSupAdmin" activeClassName="active-link">
              <i className="fa fa-cog" aria-hidden="true"></i> Innovation
              Support
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active-link">
              <i className="fa fa-envelope" aria-hidden="true"></i> Donations
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" activeClassName="active-link">
              <i className="fa fa-envelope" aria-hidden="true"></i> Educational
    </NavLink>
           <li>
            <NavLink to="/articleAdmin" activeClassName="active-link">
              <i className="fa fa-envelope" aria-hidden="true"></i> Article
           
          </li>
          <li>
            <NavLink to="/video" activeClassName="active-link">
              <i className="fa fa-envelope" aria-hidden="true"></i> Videos
            </NavLink>
          </li>
          <li>
          
            <NavLink to="/admin-createProject" activeClassName="active-link">
              <i className="fa fa-envelope" aria-hidden="true"></i> Projects management
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
