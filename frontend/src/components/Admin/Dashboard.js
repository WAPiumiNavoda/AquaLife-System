import React from "react";
import Sidebar from "./Sidebar";
import { FaUsers, FaProductHunt } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />

      <div className="admin-content">
        <div className="admin-header">
          <h1>Dashboard</h1>
        </div>

        <div className="admin-metrics">
          <div className="metric">
            <div className="metric-icon">
              <FaUsers />
            </div>
            <div className="metric-details">
              <p className="metric-title">Total Users</p>
              <p className="metric-number">3</p>
            </div>
          </div>

          <div className="metric">
            <div className="metric-icon">
              <FaProductHunt />
            </div>
            <div className="metric-details">
              <p className="metric-title">Total Products</p>
              <p className="metric-number">10</p>
            </div>
          </div>

          <div className="metric">
            <div className="metric-icon">
              <FaUsers />
            </div>
            <div className="metric-details">
              <p className="metric-title">Total Customers</p>
              <p className="metric-number">2</p>
            </div>
          </div>
        </div>

        <div className="admin-content-area">
          <div className="content-box">
            <h2 className="content-box-title">Recent Orders</h2>
            <p className="content-box-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <table className="order-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12345</td>
                  <td>John Smith</td>
                  <td>01/05/2023</td>
                  <td>Delivered</td>
                  <td>$99.99</td>
                </tr>
                <tr>
                  <td>67890</td>
                  <td>Jane Doe</td>
                  <td>01/04/2023</td>
                  <td>Shipped</td>
                  <td>$49.99</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="content-box-title">Recent Users</h2>
            <p className="content-box-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <ul className="user-list">
              <li>
                <div className="user-details">
                  <h3 className="user-name">John Smith</h3>
                  <p className="user-email">john.smith@example.com</p>
                </div>
                <div className="user-actions">
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </li>

              <li>
                <div className="user-details">
                  <h3 className="user-name">Jane Doe</h3>
                  <p className="user-email">jane.doe@example.com</p>
                </div>
                <div className="user-actions">
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </li>

              <li>
                <div className="user-details">
                  <h3 className="user-name">Bob Johnson</h3>
                  <p className="user-email">bob.johnson@example.com</p>
                </div>
                <div className="user-actions">
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
