import React,{useState,useEffect} from 'react'
import { Button, Card, Form } from "react-bootstrap";
import ErrorMessage from '../../components/ErrorMessage';
import { createInnovationAction } from '../../actions/innovationActions';
import { useDispatch, useSelector } from "react-redux";

const InnovationForm = () => {

  const [innovationType, setinnovationType] = useState("");
  const [innovationTitle, setinnovationTitle] = useState("");
  const [innovationDes, setinnovationDes] = useState("");
  const [innovationImage, setinnovationImage] = useState();
  const [innovationFile, setinnovationFile] = useState();
   const [picMessage, setPicMessage] = useState(null);

   
  const dispatch = useDispatch();

  const innovationCreate = useSelector((state) => state.innovationCreate);
  const { loading, innovation ,error} = innovationCreate;

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
          console.log(data);
          setinnovationImage(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };


  const postFileDetails = (pics) => {
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
          console.log(data);
          setinnovationFile(data.url.toString());
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
    dispatch(createInnovationAction(  innovationType,innovationTitle, innovationDes, innovationImage,innovationFile ));
  };

  return (
    <div class="container p-5">
      <div class="row">
      <div class="col-md-6">
      <img src="https://i.ibb.co/dfQ5PT4/innovation-5161494-1920.jpg" alt="Image" class="img-fluid"/>
    </div>
    <div class="col-md-6">

       <Form onSubmit={submitHandler}>
            <Form.Group controlId="title">
              <Form.Label>Innovation Title</Form.Label>
              <Form.Control
                type="title"
                value={innovationTitle}
                placeholder="Enter innovation title"
                 onChange={(e) => setinnovationTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="title">
               <Form.Label>Innovation Type</Form.Label>
               <Form.Control
                type="title"
                placeholder="Enter innovation type"
                value={innovationType}
                onChange={(e) => setinnovationType(e.target.value)}
              />
            </Form.Group>

              <Form.Group controlId="title">
               <Form.Label>Innovation Description</Form.Label>
               <Form.Control
                type="title"
                placeholder="Enter the innovation description"
                value={innovationDes}
                onChange={(e) => setinnovationDes(e.target.value)}
              />
            </Form.Group>

              {picMessage && (
            <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
          )}
          <Form.Group controlId="pic">
            <Form.Label>Innovations Images</Form.Label>
            <Form.Control
              id="custom-file"
              type="file"
              label="Upload innovation Picture"
               onChange={(e) => postDetails(e.target.files[0])}
              custom
            />
          </Form.Group>


          <Form.Group controlId="file">
            <Form.Label>Relevent Files</Form.Label>
            <Form.Control
              id="custom-file"
              type="file"
              label="Upload innovation file"
              onChange={(e) => postFileDetails(e.target.files[0])}
              custom
            />
          </Form.Group>

            <Button type="submit" variant="primary" className="my-4">
            Create Product
            </Button>
            <Button className="mx-5"  variant="danger">
            Reset Feilds
            </Button>
        </Form>
    </div>
  </div>
</div>

  )
}

export default InnovationForm