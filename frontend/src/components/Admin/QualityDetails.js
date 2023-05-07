import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listQualityOne } from "./../../actions/qualityTestActions";
import { useParams } from "react-router-dom";

const QualityDetails = () => {
  const { id } = useParams(); // get the _id from the URL
  const dispatch = useDispatch();
  const qualityOne = useSelector((state) => state.qualityOne);
  const { loading, quality, error } = qualityOne;

  useEffect(() => {
    dispatch(listQualityOne(id));
  }, [dispatch, id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <h2>Quality Details</h2>
          <p>
            <strong>Name:</strong> {quality.name}
          </p>
          <p>
            <strong>Email:</strong> {quality.email}
          </p>
          <p>
            <strong>Mobile:</strong> {quality.mobile}
          </p>
          <p>
            <strong>District:</strong> {quality.district}
          </p>
          <p>
            <strong>Token:</strong> {quality.token}
          </p>
        </>
      )}
    </div>
  );
};

export default QualityDetails;
