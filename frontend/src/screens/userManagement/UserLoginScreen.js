import React from "react";
import { useState, useE } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const onLogin =  () => {
    console.log("on Login");
    const credentials = {
      email,
      password,
    };
    axios
        .post("http://localhost:5000/user/login", credentials)
        .then((response) => {
          console.log(response);
          if (response.data.role === "Admin") {
            navigate("/dashboard");
          } else if (response.data.role === "User") {
            navigate("/");
          }
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
  }


    return (
      <>
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div style={{paddingTop:'200px'}} className=" row d-flex justify-content-center align-items-center h-100">
              
              <div className="bg-light p-5 col-md-10 col-lg-8 col-xl-5 offset-xl-1">
                <form>
                  <div className="form-outline mb-4">
                    {/* EMAIL INPUT */}
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3"
                      />
                      <label className="form-check-label" for="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="/" className="text-body">
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                      onClick={onLogin}
                    >
                      Login
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <a href="/" className="link-danger">
                        Register
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
         
        </section>
      </>
    );
  };

  export default Login;