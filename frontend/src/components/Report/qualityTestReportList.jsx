import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listQuality, deleteQuality } from "./../../actions/qualityTestActions";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

const QualityTestReportList = React.forwardRef((props, ref) => {

  const dispatch = useDispatch();
  const qualityList = useSelector((state) => state.qualityList);
  const { loading, quality, error } = qualityList;

  useEffect(() => {
    dispatch(listQuality());
  }, [dispatch]);

  return (
    <div className="admin-dashboard">
      {/* Sidebar component */}

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

          <table ref={ref} className="order-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>District</th>
              </tr>
            </thead>
            <tbody>
                {
                quality?.reverse().map((quality,index) => (
                  <tr>
                    <td>{quality.token}</td>
                    <td>{quality.name}</td>
                    <td>{quality.email}</td>
                    <td>{quality.mobile}</td>
                    <td>{quality.district}</td>
                  </tr>
                ))
                }
            </tbody>

            <Card.Footer className="text-muted mt-5 mx-5">
          Creating on - {new Date().toLocaleDateString()}
       </Card.Footer>

          </table>
        </div>
      </div>
    </div>
  );
}
)

export default QualityTestReportList;
