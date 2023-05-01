import React,{useState,useEffect} from 'react'
import { Button, Card, Form } from "react-bootstrap";


const InnovationForm = () => {

  const [innovationType, setInnovationType] = useState("");
  const [innovationTitle, setInnovationTitle] = useState("");
  const [innovationDes, setInnovationDes] = useState("");
  const [innovationImage, setInnovationImage] = useState("");
  const [innovationFile, setInnovationFile] = useState("");

  const postImage = (pics) => {
   
  };

  const postFile = (files) => {
   
  };

  return (
<div class="container p-5">
  <div class="row">
    <div class="col-md-6">
      <img src="https://i.ibb.co/xhr7v59/EDA-082214.jpg" alt="Image" class="img-fluid"/>
    </div>
    <div class="col-md-6">
       <Form >  
            <Form.Group controlId="title">
              <Form.Label>Innovation Type</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter the food name" 
                value={innovationType}
                onChange={(e) => setInnovationType(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="title">
               <Form.Label>Innovation Title</Form.Label>
               <Form.Control
                type="title"
                placeholder="Enter the price"
                 value={innovationTitle}
                onChange={(e) => setInnovationTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="title">
               <Form.Label>Innovation Description </Form.Label>
               <Form.Control
                type="title"
                placeholder="Enter the price"
                 value={innovationDes}
                onChange={(e) => setInnovationDes(e.target.value)}
              />
            </Form.Group>

          
          <Form.Group controlId="pic">
            <Form.Label>Pictures</Form.Label>
            <Form.Control
              onChange={(e) => postImage(e.target.files[0])}
              id="custom-file"
              type="file"
              label="Upload Profile Picture"
              value={innovationImage}
              custom
            />
          </Form.Group>

           <Form.Group controlId="pic">
            <Form.Label>Files</Form.Label>
            <Form.Control
              onChange={(e) => postFile(e.target.files[0])}
              id="custom-file"
              type="file"
              value={innovationFile}
              label="Upload Profile Picture"
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