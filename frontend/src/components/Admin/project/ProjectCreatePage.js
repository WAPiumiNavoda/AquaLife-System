import React,{useState,useEffect} from 'react'
import { Button,Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createProjects } from '../../../actions/projectsActions';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import Loading from "../../../components/Loading";
import ErrorMessage from "../../../components/ErrorMessage";
import "./Project.css"

const ProjectCreate = () => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState();
  const [picMessage, setPicMessage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

   
  const dispatch = useDispatch();

  const projectCreate = useSelector((state) => state.projectCreate);
  const {  project,loading, error } = projectCreate;

  const  user_Login = useSelector((state) => state. user_Login);
  const { userInfo } =  user_Login;
  console.log("user", userInfo)


  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please Select an Image");
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png" || pics.type === "image/jpg") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "LAYOUTindex");
      data.append("cloud_name", "dknttakfo");
      fetch("https://api.cloudinary.com/v1_1/dknttakfo/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
        //   console.log(data);
          setPhoto(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  //submit form
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProjects( name,description,price,photo ));
  };

  return (
    <div className="admin-dashboard" style={{ backgroundColor: "#87CEEB" }}>
  <Sidebar />

  <div className="admin-content">
    <div className="admin-header">
    <Link to="/projectList" className="btn btn-success ml-9 my-4 custom-button" style={{ fontSize:'18px', marginLeft:"90px", backgroundColor: 'green', height: '40px'}}>
        View Project List
    </Link>

    <br />
            <div>
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              {loading && <Loading />}
            </div>
            <br />

      <h1 style={{ marginLeft: "100px", marginTop: "-10px",marginLeft:"500px",fontFamily:"poppins",fontSize:"40px"}}>Add Your New Projects</h1>
      <br />
    </div>

  
    <div className="container2">
  <div className="col-md-9">
  {uploadedImage && (
  <img
    src={URL.createObjectURL(uploadedImage)}
    alt="Uploaded"
    style={{
      maxWidth: '400px',
      maxHeight: '400px',
      display: 'block',
      margin: '0 auto',
    }}
  />
)}

    <Form onSubmit={submitHandler}>
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
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the Project value"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>

      {picMessage && <ErrorMessage variant="danger">{picMessage}</ErrorMessage>}
     
   
         <div className="button-container">
                <Button type="submit" variant="primary" className="my-4 custom-button" style={{ marginLeft:"390px",height:"50px"}}>
                  Create New Project
                </Button>

              
         </div>

    </Form>
  </div>
</div>

    </div>
  </div>


  )
}


export default ProjectCreate