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
              <i className="fa fa-home" aria-hidden="true"></i> Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-link">
              <i className="fa fa-info" aria-hidden="true"></i> Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active-link">
              <i className="fa fa-cog" aria-hidden="true"></i> Customers
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active-link">
              <i className="fa fa-envelope" aria-hidden="true"></i> Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
