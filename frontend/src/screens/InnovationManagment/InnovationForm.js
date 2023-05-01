import React from 'react'
import React,{useState,useEffect} from 'react'
import { Button, Card, Form } from "react-bootstrap";


const InnovationForm = () => {

  const [innovationType, setInnovationType] = useState("");
  const [innovationTitle, setInnovationTitle] = useState("");
  const [innovationDes, setInnovationDes] = useState("");
  const [innovationImage, setInnovationImage] = useState("");
  const [innovationFile, setInnovationFile] = useState("");

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
              />
            </Form.Group>

            <Form.Group controlId="title">
               <Form.Label>Innovation Title</Form.Label>
               <Form.Control
                type="title"
                placeholder="Enter the price"
                // onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="title">
               <Form.Label>Innovation Description </Form.Label>
               <Form.Control
                type="title"
                placeholder="Enter the price"
                // onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

          
          <Form.Group controlId="pic">
            <Form.Label>Pictures</Form.Label>
            <Form.Control
              // onChange={(e) => postDetails(e.target.files[0])}
              id="custom-file"
              type="file"
              label="Upload Profile Picture"
              custom
            />
          </Form.Group>

           <Form.Group controlId="pic">
            <Form.Label>Files</Form.Label>
            <Form.Control
              // onChange={(e) => postDetails(e.target.files[0])}
              id="custom-file"
              type="file"
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