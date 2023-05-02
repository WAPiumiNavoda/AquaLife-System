import React from 'react'
import { Button, Card, Form } from "react-bootstrap";


const InnovationForm = () => {
  return (
    //  <div>
    //      <Card className='m-5'>
    //     <Card.Header >Innovation Support Form</Card.Header>
    //     <Card.Body>
    //       <Form >
           
    //         <Form.Group controlId="title">
    //           <Form.Label>Product Name</Form.Label>
    //           <Form.Control
    //             type="title"
                
    //             placeholder="Enter the food name"
    //           />
    //         </Form.Group>

    //         <Form.Group controlId="title">
    //            <Form.Label>Food Price</Form.Label>
    //            <Form.Control
    //             type="title"
    //             placeholder="Enter the price"
    //           />
    //         </Form.Group>

    //  <Form.Group controlId="title">
    //  <Form.Label>Dress Category</Form.Label>
    //  <div class="form-group col-lg flex-column d-flex" style={{}}>
    //   <select id="inputState" class="form-control"  required>
    //     <option selected placeholder="">Choose Product...</option>
    //     <option>Men</option>
    //     <option>Wemen</option>
    //     <option>Kids</option>
    //   </select>
    // </div>
    //  </Form.Group>

    //       <Form.Group controlId="pic">
    //         <Form.Label>Profile Picture</Form.Label>
    //         <Form.Control
    //           id="custom-file"
    //           type="file"
    //           label="Upload Profile Picture"
    //           custom
    //         />
    //       </Form.Group>

    //         <Button type="submit" variant="primary" className="my-4">
    //         Create Product
    //         </Button>
    //         <Button className="mx-5"  variant="danger">
    //         Reset Feilds
    //         </Button>
    //     </Form>
    //   </Card.Body>

    //    <Card.Footer className="text-muted">
    //       Creating on - {new Date().toLocaleDateString()}
    //    </Card.Footer>

    //  </Card>
    // </div>

    <div class="container p-5">
  <div class="row">
    <div class="col-md-6">
      <img src="https://i.ibb.co/dfQ5PT4/innovation-5161494-1920.jpg" alt="Image" class="img-fluid"/>
    </div>
    <div class="col-md-6">
      <form>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
        </div>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email"/>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea class="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</div>

  )
}

export default InnovationForm