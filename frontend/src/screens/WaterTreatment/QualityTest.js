import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createQualityAction } from "./../../actions/qualityTestActions";

function Quality() {
  // Define states for form inputs and validation errors
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [district, setDistrict] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const formRef = useRef();

  // Define a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    let errors = {};
    if (!token) {
      errors.token = "Token number is required";
    }
    if (!name) {
      errors.name = "Full name is required";
    }
    if (!email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }
    if (!mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(mobile)) {
      errors.mobile = "Mobile number is invalid";
    }
    if (!district) {
      errors.district = "District number is required";
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Submit form data
    dispatch(createQualityAction(token, name, email, mobile, district));

    // Reset form field
    formRef.current.reset();
  };

  return (
    <div>
      <div className="banner1">
        <h1>
          <span className="banner1__wastewater">Wastewater Treatment &</span>
        </h1>
        <h1>
          <span className="banner1__treatment">Water Quality Monitoring</span>
        </h1>
        <p>
          Our Company has been the leading supplier of wastewater treatment{" "}
          <br /> & water quality monitoring solutions since 1995.
        </p>
      </div>
      <div className="form-container">
        <h2>Request Test Results</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="token">Token Number:</label>
            <input
              type="text"
              id="token"
              name="token"
              onChange={(e) => setToken(e.target.value)}
              required
            />
            {errors.token && <p className="error">{errors.token}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number:</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            {errors.mobile && <p className="error">{errors.mobile}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="district">District:</label>
            <input
              type="text"
              id="district"
              name="district"
              onChange={(e) => setDistrict(e.target.value)}
              required
            />
            {errors.district && <p className="error">{errors.district}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Quality;
