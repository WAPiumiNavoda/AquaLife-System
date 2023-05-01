import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';


const OneInnovation = () => {
  return (
<div>
    <Row className='m-5 shadow p-3 mb-5 bg-body rounded'>
        <Col>
        <h3 className='px-5 pb-2' style={{fontSize:"45px"}}>Water Fillter</h3>

        <p className='px-5' style={{fontSize:"25px"}}>Michael Hemsworth — April 14, 2023 — Lifestyle</p> 
        <p className='px-5' style={{fontSize:"20px"}}>References: teamwarrior & foodbev</p>
           <p className='pt-4 mx-5 pb-4'>The advertisers and user guarantees that his or her Content do
              The advertisers and user guarantees that his or her Content do 
              The advertisers and user guarantees that his or her Content do The
              advertisers and user guarantees that his or her Content do The
              advertisers and user guarantees that his or her Content do
              The advertisers and user guarantees that his or her Content do
              The advertisers and user guarantees that his or her Content do 
              The advertisers and user guarantees that his or her Content do The
              advertisers and user guarantees that his or her Content do The
              advertisers and user guarantees that his or her Content do </p>
           <Button className='mx-5 px-5' style={{marginLeft:'90px'}}>Learn More</Button>
         </Col>
         <Col className=' text-center'>
         <Image 
          src="https://i.ibb.co/7Jt1bHD/images.jpg" 
          class="rounded float-right w-80" 
          style={{width: '60%'}} 
          alt="image" />
         </Col>
    </Row>

<div class="container pt-5 pb-3">
  <div class="row">
    <div class="col-md-7">
      <img src="https://i.ibb.co/sHMfCn1/istockphoto-514719272-612x612.jpg" 
      alt="Image" 
      class="img-fluid"
       style={{width: '180%',height:"100%"}} 
      />
    </div>
    <div class="col-md-5">
      <form>
        <div class="form-group">
          <label for="name">Your Name:</label>
          <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
        </div>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email"/>
        </div>
         <div class="form-group">
          <label for="name">Address:</label>
          <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
        </div>
         <div class="form-group">
          <label for="name">Phone Number:</label>
          <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
        </div>
         <div class="form-group">
          <label for="name">Price - Donate:</label>
          <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit Support</button>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default OneInnovation