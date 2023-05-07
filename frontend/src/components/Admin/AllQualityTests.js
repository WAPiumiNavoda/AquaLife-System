import React, { useState, useEffect } from "react";
import { FaUser, FaProductHunt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { listQuality } from "./../../actions/qualityTestActions";
import Sidebar from "./Sidebar";

const QualityAdmin = () => {
  //list all quality tests
  const dispatch = useDispatch();
  const qualityList = useSelector((state) => state.qualityList);
  const { loading, quality, error } = qualityList;

  useEffect(() => {
    dispatch(listQuality());
  }, [dispatch]);

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-content">
        <div className="admin-header">
          <h1 style={{ marginLeft: "100px" }}>All Consumers</h1>
        </div>

        <div
          className="content-box"
          style={{
            backgroundColor: "#f5f5f0",
            width: "900px",
            marginLeft: "100px",
          }}
        >
          <h2 className="content-box-title">List Of Test Requests</h2>
          <p className="content-box-description"></p>

          <table className="order-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>District</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6">Loading...</td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="6">{error}</td>
                </tr>
              ) : (
                quality
                  .slice()
                  .reverse()
                  .map((quality, index) => (
                    <tr key={index}>
                      <td>{quality.token}</td>
                      <td>{quality.name}</td>
                      <td>{quality.email}</td>
                      <td>{quality.mobile}</td>
                      <td>{quality.district}</td>
                      <td className="user-actions">
                        <button className="btn btn-primary">Approve</button>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QualityAdmin;
