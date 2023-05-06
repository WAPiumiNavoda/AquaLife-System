import React,{useState,useEffect} from 'react'
import { Button, Card, Form } from "react-bootstrap";
import ErrorMessage from '../../components/ErrorMessage';
import { useDispatch, useSelector } from "react-redux";
import { createProjects } from '../../actions/projectsActions';

const ProjectCreate = () => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState();
  const [picMessage, setPicMessage] = useState(null);

   
  const dispatch = useDispatch();

  const projectCreate = useSelector((state) => state.projectCreate);
  const { loading, project ,error} = projectCreate;

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
    <div class="card p-5">
   <h2 className='m-3' style={{fontSize:'45px', color:"#57aade"}}>Add Your New Projects</h2>

   <div class="card-header" style={{fontSize:'20px'}}>
   Online platforms provide a unique opportunity to support critical water projects around the world. From drilling wells in areas without access to clean drinking water to implementing water conservation initiatives in drought-prone regions, these projects are crucial to improving the quality of life for communities in need. By contributing to a water project that resonates with you, you can play a vital role in ensuring that everyone has access to this essential resource. Join the movement and help make a difference today.
    </div>

    <div class="container p-5">
      <div class="row">
      <div class="col-md-6">
      <img src="https://assets-news.housing.com/news/wp-content/uploads/2021/06/14175932/A-guide-to-water-conservation-methods-and-its-importance-FB-1200x700-compressed.jpg" alt="Image" class="img-fluid"/>
    </div>
    <div class="col-md-6">

       <Form onSubmit={submitHandler}>
            <Form.Group controlId="title">
              <Form.Label>Project Title</Form.Label>
              <Form.Control
                type="title"
                value={name}
                placeholder="Enter Project Title"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="title">
               <Form.Label>Description</Form.Label>
               <Form.Control
                type="testArea"
                placeholder="Enter Project Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

              <Form.Group controlId="title">
               <Form.Label>Price</Form.Label>
               <Form.Control
                type="price"
                placeholder="Enter the Project value"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

              {picMessage && (
            <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
          )}
          <Form.Group controlId="pic">
            <Form.Label>Project Image</Form.Label>
            <Form.Control
              id="custom-file"
              type="file"
              label="Upload Project Picture"
              onChange={(e) => postDetails(e.target.files[0])}
              custom
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="my-4">
            Create New Project
            </Button>
            <Button className="mx-5"  variant="danger">
            Reset Feilds
            </Button>
        </Form>
    </div>
  </div>
</div>
</div> 

  )
}


export default ProjectCreate