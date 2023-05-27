import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listQualityOne } from "../../actions/qualityTestActions";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

const QualityDetails = () => {
  const { id } = useParams(); // get the _id from the URL
  const dispatch = useDispatch();
  const qualityOne = useSelector((state) => state.qualityOne);
  const { quality, error } = qualityOne;

  useEffect(() => {
    dispatch(listQualityOne(id));
  }, [dispatch, id]);

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-content">
        <div className="admin-header">
          <h1>Request Details</h1>
        </div>

        {error ? (
          <p>{error}</p>
        ) : (
          <div className="card-new99">
            <h2 style={{ color: "red" }}>
              Token No: {quality && quality.token}
            </h2>
            <p>
              <strong>Name:</strong> {quality && quality.name}
            </p>
            <p>
              <strong>Email:</strong> {quality && quality.email}
            </p>
            <p>
              <strong>Mobile:</strong> {quality && quality.mobile}
            </p>
            <p>
              <strong>District:</strong> {quality && quality.district}
            </p>
            <p>
              <strong>Created At:</strong> {quality && quality.createdAt}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QualityDetails;
