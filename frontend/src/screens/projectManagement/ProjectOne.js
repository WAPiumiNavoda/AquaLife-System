import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';


const OneProject = () => {
  return (
<div>
    <Row className='m-5 shadow p-3 mb-5 bg-body rounded'>
        <Col>
        <h3 className='px-5 pb-2' style={{fontSize:"45px"}}>New Article</h3>

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
           <Button className='mx-5 px-5' style={{marginLeft:'90px'}}>Read More</Button>
         </Col>
         <Col className=' text-center'>
         <Image 
          src="https://i.ibb.co/7Jt1bHD/images.jpg" 
          class="rounded float-right w-80" 
          style={{width: '60%'}} 
          alt="image" />
         </Col>
    </Row>

    
</div>
  )
}

export default OneProject