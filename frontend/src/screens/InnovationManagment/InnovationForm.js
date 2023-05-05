import React from 'react'
import { Button, Card, Form } from "react-bootstrap";


const InnovationForm = () => {
  return (
    <div class="container p-5">
      <div class="row">
      <div class="col-md-6">
      <img src="https://i.ibb.co/dfQ5PT4/innovation-5161494-1920.jpg" alt="Image" class="img-fluid"/>
    </div>
    <div class="col-md-6">
       <Form >
           
            <Form.Group controlId="title">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter the food name"
              />
            </Form.Group>

            <Form.Group controlId="title">
               <Form.Label>Food Price</Form.Label>
               <Form.Control
                type="title"
                placeholder="Enter the price"
              />
            </Form.Group>

              <Form.Group controlId="title">
               <Form.Label>Food Price</Form.Label>
               <Form.Control
                type="title"
                placeholder="Enter the price"
              />
            </Form.Group>

            
          <Form.Group controlId="pic">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              id="custom-file"
              type="file"
              label="Upload Profile Picture"
              custom
            />
          </Form.Group>


          <Form.Group controlId="pic">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
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