import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { updateLaborAction } from "../../actions/donateActions";

const LaborUpdate = () => {
  const { id } = useParams();

  const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [availableDate, setAvailableDate] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
 
  const dispatch = useDispatch();

  const laborUpdate = useSelector((state) => state.laborUpdate);
  const {  } = laborUpdate;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/user/getLabor/${id}`);
        setName(data.name);
        setEmail(data.email);
        setUserName(data.userName);
        setAvailableDate(data.availableDate);
        setCountry(data.country);
        setPhone(data.phone);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, [id]);

  const resetHandler = () => {
    setName("");
    setEmail("");
    setUserName("");
    setAvailableDate("");
    setCountry("");
    setPhone("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (!name ||
        !email ||
        !userName ||
        !availableDate ||
        !country ||
		!phone) return;
  
    const updatedLabor = {
        name,
        email,
        userName,
        availableDate,
        country,
        phone
    };
  
    dispatch(updateLaborAction(id, updatedLabor));
  

  };
  
  
  return (
    <div className="background1">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
  
      <h2 style={{ textAlign: "center", marginTop: "-60px", fontFamily: "poppins", fontSize: "55px" }}>UPDATE LABOR DETAILS</h2>
      
      <Link to="/laborList" className="btn btn-success ml-9 my-4 custom-button" style={{ fontSize:'18px', marginLeft:"90px", backgroundColor: 'green', height: '40px'}}>
        Back
    </Link>

      <Card
        style={{
          borderRadius: 80,
          borderWidth: 7.0,
          marginTop: -30,
          paddingInline: 10,
          background: "rgba(231, 238, 238, 0.8)",
          marginLeft: "22%",
          marginRight: "20%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          minWidth: "120vh",
          width: 800,
          Height: 400
        }}
      >
        <Form onSubmit={updateHandler}>
          
          <Form.Group controlId="title">
            <Form.Label>Project Title</Form.Label>
            <Form.Control
              type="title"
              value={name}
              placeholder="Enter Project Title"
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%"}} // Maximize width
            />
          </Form.Group>
  
          <Form.Group controlId="description">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "800px" }} // Maximize width and height
            />
          </Form.Group>
  
          <Form.Group controlId="price">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={{ width: "100%" }} // Maximize width
            />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Date"
              value={availableDate}
              onChange={(e) => setAvailableDate(e.target.value)}
              style={{ width: "100%" }} // Maximize width
            />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              style={{ width: "100%" }} // Maximize width
            />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ width: "100%" }} // Maximize width
            />
          </Form.Group>
          
          <Button variant="primary" type="submit" style={{ fontSize: 20, marginTop: 10 }}>
            Update
          </Button>
          {"  "}
          <Button variant="danger" onClick={resetHandler} style={{ fontSize: 20, marginTop: 10,marginLeft:50 }}>
            Reset
          </Button>
        </Form>
  
        <br />
      </Card>
      <br />
      <br />
    </div>
  
  );
  
  
};

export default LaborUpdate;
