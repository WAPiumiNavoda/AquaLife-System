import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import Sidebar from '../Sidebar';
import { listDonateLabor } from "../../../actions/donateActions";
import emailjs from 'emailjs-com';

const LaborListForAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");
 
  const dispatch = useDispatch();

  const laborList = useSelector((state) => state.laborList);
  const { loading, labor, error } = laborList;

  useEffect(() => {
    dispatch(listDonateLabor());
  }, [dispatch]);

  const form = useRef(); // Add this line to create form reference
  const formRef = useRef(); // Add this line to create formRef reference

  const sendEmail = () => {
    emailjs.sendForm("service_c2xbm9h", "template_iqfpnjo", form.current, "pmBrDg1YWasbFz2ho")
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  
  const denyLabor = () => {
    emailjs.sendForm("service_c2xbm9h", "template_i2njnhi", formRef.current, "pmBrDg1YWasbFz2ho")
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const filteredLabor = labor && labor.filter(L => L.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="admin-dashboard">
      <Sidebar />

      <div className="admin-content">
        <div className="admin-header">
          <h1 style={{ marginLeft: "100px", marginTop: "20px", marginLeft: "500px", fontFamily:"poppins", fontSize:"50px" }}>Human Labor List</h1>
        </div>

        <div className="search-bar">
          <Form>
            <Form.Control
              type="text"
              placeholder="Search by project name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              style={{ width: "400px", marginLeft:"1000px" }} // Add width style to the input
            />
          </Form>
        </div>
        <br/>

        <div className="table-container">
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Project Name</th>
                <th>Email</th>
                <th>Name</th>
                <th>Available Date</th>
                <th>Country</th>
                <th>Contact Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredLabor && filteredLabor.map((L) => (
                <tr key={L.id}>
                  <td>{L.name}</td>
                  <td>{L.email}</td>
                  <td>{L.userName}</td>
                  <td>{L.availableDate}</td>
                  <td>{L.country}</td>
                  <td>{L.phone}</td>
                  <td>
                    <div className="user-actions">
                      <form ref={form}>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          fdprocessedid="3ah475"
                          onClick={sendEmail}
                        >
                          Approve
                        </button>
                      </form>
                      <form ref={formRef}>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          fdprocessedid="eb6yb"
                          onClick={denyLabor}
                        >
                          Deny
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LaborListForAdmin;
