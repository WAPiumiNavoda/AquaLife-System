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
          Our Company has been the leading supplier of wastewater treatment
          <br /> & water quality monitoring solutions since 1995.
        </p>
      </div>

      <div className="description-container">
        <h2>Water Quality Monitoring</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac arcu at lectus efficitur placerat. Mauris euismod eros nec lorem
          facilisis tristique. Nulla facilisi. Sed laoreet odio vitae nisl
          venenatis, id fermentum nunc fringilla. Fusce finibus auctor tortor,
          id aliquet elit aliquet eu.
        </p>
      </div>

      <div className="metrics-container">
        <div className="metric">
          <div className="metric-icon">
            <i className="fa fa-tachometer-alt"></i>
          </div>
          <div className="metric-details">
            <h3>Water Flow</h3>
            <p>Measure the flow rate of water</p>
            <p className="metric-value">15 L/min</p>
          </div>
        </div>
        <div className="metric">
          <div className="metric-icon">
            <i className="fa fa-thermometer-half"></i>
          </div>
          <div className="metric-details">
            <h3>Temperature</h3>
            <p>Monitor the temperature of water</p>
            <p className="metric-value">25°C</p>
          </div>
        </div>
        <div className="metric">
          <div className="metric-icon">
            <i className="fa fa-tint"></i>
          </div>
          <div className="metric-details">
            <h3>pH Level</h3>
            <p>Track the pH level of water</p>
            <p className="metric-value">7.5</p>
          </div>
        </div>
      </div>

      <div className="page-content">
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

        <div className="how-it-works">
          <h3>Do you want to know your Water Quality?</h3>
          <p>
            Water quality monitoring is essential to assess the safety and
            purity of water sources, ensuring they meet established standards
            and regulations. Various organizations and regulatory bodies have
            set standards for water quality, providing guidelines and parameters
            for different types of water sources such as drinking water, surface
            water, groundwater, and wastewater. These standards help maintain
            the health and well-being of individuals and protect the
            environment. As a testing company, conducting water quality analysis
            involves several steps to ensure accurate and reliable results.
            <br />
            <div className="steps">
              <ul className="step-list">
                <li className="step-item">
                  <span className="step-icon">🔷</span>
                  <span className="step-text">
                    Water samples are collected from the source, such as taps,
                    wells, or rivers, by trained collectors who follow proper
                    sampling procedures to avoid contamination.
                  </span>
                </li>
                <li className="step-item">
                  <span className="step-icon">🔷</span>
                  <span className="step-text">
                    The collector provides a unique identification token or
                    label to the individual providing the water sample. This
                    token helps track the sample throughout the testing process.
                  </span>
                </li>
                <li className="step-item">
                  <span className="step-icon">🔷</span>
                  <span className="step-text">
                    The person providing the water sample fills out a form,
                    providing relevant information such as the sample source,
                    date, time, and any specific concerns or observations
                    related to the sample.
                  </span>
                </li>
                <li className="step-item">
                  <span className="step-icon">🔷</span>
                  <span className="step-text">
                    The collected water samples are then transported to the
                    laboratory for analysis. The samples are handled and stored
                    carefully to preserve their integrity and prevent any
                    changes in their composition.
                  </span>
                </li>
                <li className="step-item">
                  <span className="step-icon">🔷</span>
                  <span className="step-text">
                    In the laboratory, trained technicians perform various tests
                    and analyses on the water samples. These tests may include
                    measuring pH levels, turbidity, conductivity, chemical
                    composition, and microbial content.
                  </span>
                </li>
                <li className="step-item">
                  <span className="step-icon">🔷</span>
                  <span className="step-text">
                    Once the analysis is complete, a test result report is
                    generated. The report includes the findings of each
                    parameter tested, comparing the results against the
                    applicable water quality standards or guidelines.
                  </span>
                </li>
                <li className="step-item">
                  <span className="step-icon">🔷</span>
                  <span className="step-text">
                    The testing company sends the test result report to the
                    individual who provided the water sample. The report is
                    typically sent via email and includes the relevant token
                    number for easy identification.
                  </span>
                </li>
              </ul>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Quality;
