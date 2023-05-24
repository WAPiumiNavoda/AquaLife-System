import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listQuality, deleteQuality } from "./../../actions/qualityTestActions";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const QualityAdmin = () => {
  const dispatch = useDispatch();
  const qualityList = useSelector((state) => state.qualityList);
  const { loading, quality, error } = qualityList;
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(listQuality());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this quality test?")) {
      dispatch(deleteQuality(id));
    }
  };

  const filteredQuality =
    quality &&
    quality.filter((item) => {
      return item.token.includes(searchTerm) || item.name.includes(searchTerm);
    });

  return (
    <div className="admin-dashboard">
      {/* Sidebar component */}
      <Sidebar />

      <div className="admin-content">
        <div className="admin-header">
          <h1 style={{ marginLeft: "100px" }}>All Consumers</h1>
        </div>

        <br />

        <input
          type="text"
          placeholder="Search.."
          className="text111"
          name="search2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            backgroundColor: "white",
            border: "1px solid black",
            color: "black",
            width: "400px",
            height: "30px",
            marginLeft: "190px",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        />

        <br />
        <br />

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
              ) : filteredQuality && filteredQuality.length === 0 ? (
                <tr>
                  <td colSpan="6">No matching results found.</td>
                </tr>
              ) : (
                filteredQuality.map((quality) => (
                  <tr key={quality._id}>
                    <td>{quality.token}</td>
                    <td>{quality.name}</td>
                    <td>{quality.email}</td>
                    <td>{quality.mobile}</td>
                    <td>{quality.district}</td>
                    <td className="user-actions">
                      <Link to={`/quality/${quality._id}`}>
                        <button className="btn btn-primary">View</button>
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(quality._id)}
                      >
                        Delete
                      </button>
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
