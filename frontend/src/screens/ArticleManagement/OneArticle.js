import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';


const OneArticle = () => {
  return (
<div>
    <Row></Row>
    <Row className='mt-3 shadow p-3 bg-body rounded'>
        <Col>
        <h3 className='px-5 pb-2' style={{fontSize:"45px"}}>New Article</h3>

        <p className='px-5' style={{fontSize:"25px"}}>Michael Hemsworth — April 14, 2023 — Lifestyle</p> 
        <p className='px-5' style={{fontSize:"20px"}}>References: teamwarrior & foodbev</p>
           <p className='pt-4 mx-5 pb-4'>The advertisers and user guarantees that his or her Content do
              The advertisers and user guarantees that his or her Content do 
              The advertisers and user guarantees that his or her Content do The
              advertisers and user guarantees that his or her Content do The
              advertisers and user guarantees that his or her Content do
              </p>
           <Button className='mx-5 px-5' style={{marginLeft:'90px'}}>Read More</Button>
         </Col>
         <Col className=' text-center'>
         <Image 
          src="https://i.ibb.co/F7DfMr5/istockphoto-474852858-1024x1024.jpg" 
          class="rounded float-right w-80" 
          style={{width: '60%'}} 
          alt="image" />
         </Col>
    </Row>

    <div class="container pt-5 pb-3">
        <div class="row">
            <div class="col-md-7">
            <img src="https://i.ibb.co/VYYLt3S/3d-business-man-studying-online.png" 
            alt="Image" 
            class="img-fluid"
            style={{width: '50%',height:"100%"}} 
            />
            </div>
            <div class="col-md-5" style={{
                background:"#f2f2f2",
                padding:"15px",
                borderRadius:"5px",
                boxShadow:"2px 2px #e6e6e6",
                height:"25%",
            }}>
            <p className='' style={{fontSize:"25px", fontWeight:"700", color:"#0080ff", textAlign:"center"}}>Connect With Us</p> 
            <form>
                <div class="form-group">
                    <label for="message">Name</label>
                    <input type="text" class="form-control" id="message" rows="5" placeholder="Enter your name"/>
                </div>
                <div class="form-group">
                    <label for="message">Email"</label>
                    <input class="form-control" type="email" id="message" rows="5" placeholder="Enter your email"/>
                </div>
                    <Button type="submit" href="/ArticleForm" class="btn btn-primary">Submit</Button>
            </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default OneArticle