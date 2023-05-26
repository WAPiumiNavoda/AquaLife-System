import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/Loading";
import ErrorMessage from "../../../components/ErrorMessage";
import { updateProjectAction } from "../../../actions/projectsActions";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ProjectUpdate = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);

  const dispatch = useDispatch();

  const projectUpdate = useSelector((state) => state.projectUpdate);
  const { loading, error } = projectUpdate;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/user/admin/getProject/${id}`);
        setName(data.name);
        setDescription(data.description);
        setPrice(data.price);
        setPhoto(data.photo);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, [id]);

  const resetHandler = () => {
    setName("");
    setDescription("");
    setPrice("");
    setPhoto("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (!name || !description || !price || !photo) return;
  
    const updatedProject = {
      name,
      description,
      price,
      photo
    };
  
    dispatch(updateProjectAction(id, updatedProject));
    console.log("updatedProject",updatedProject)

  };
  
  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please select an image");
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png" || pics.type === "image/jpg") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "LAYOUTindex");
      data.append("cloud_name", "dknttakfo");
      fetch("https://api.cloudinary.com/v1_1/dknttakfo/image/upload", {
        method: "POST",
        body: data
      })
        .then((res) => res.json())
        .then((data) => {
          setPhoto(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please select an image");
    }
  };

  return (
    <div className="backgroundU">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
  
      <h2 style={{ textAlign: "center", marginTop: "-60px", fontFamily: "poppins", fontSize: "55px" }}>UPDATE PROJECT DETAILS</h2>
      
      <Link to="/projectList" className="btn btn-success ml-9 my-4 custom-button" style={{ fontSize:'18px', marginLeft:"90px", backgroundColor: 'green', height: '40px'}}>
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
          <Form.Group controlId="pic">
            <Form.Label>Project Image</Form.Label>
            <Form.Control
              type="file"
              label="Upload Project Picture"
              onChange={(e) => {
                const file = e.target.files[0];
                setUploadedImage(file);
                postDetails(file);
              }}
              custom
            />
          </Form.Group>
  
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
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Project Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ width: "800px", height: "200px" }} // Maximize width and height
            />
          </Form.Group>
  
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Project value"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={{ width: "100%" }} // Maximize width
            />
          </Form.Group>
  
          {picMessage && <ErrorMessage variant="danger">{picMessage}</ErrorMessage>}
  
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

export default ProjectUpdate;
