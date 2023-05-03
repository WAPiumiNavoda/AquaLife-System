import React, { useState } from 'react';
import { Button, Card, Form } from "react-bootstrap";
import '../../css/article.css';

const ArticleForm = () => {
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
      <img src="https://ibb.co/W0t0nWD" alt="Image" class="img-fluid"/>
    </div>
    <div class="col-md-6">
    <p id='Title'>Share your Knowladge with the others</p>
      <form class="form-group-article">
        <div class="form-group">
          <label for="category">Article Category: </label>
          <select>
            <option value=""> Select an Category</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div class="form-group">
          <label for="title">Article Title:</label>
          <input type="text" class="form-control" id="title" placeholder="Enter the Title"/>
        </div>
        <div class="form-group">
          <label for="content">Content:</label>
          <textarea class="form-control" id="content" rows="5" placeholder="Enter your content"></textarea>
        </div>
        <div class="form-group">
          <label for="name">Author's Name:</label>
          <textarea class="form-control" id="author's name" placeholder="Enter your Name"></textarea>
        </div>
        <button type="submit" class="btn-primary-submit">Submit</button>
      </form>
    </div>
  </div>
</div>

  )
}

export default ArticleForm