import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row';
import '../../css/innovation.css';
import img3 from "../../Assets/blog.jpg";
import img4 from "../../Assets/product.jpg";
import { Button } from 'react-bootstrap';

const InnovationMain = () => {
  return (
    <>

   <div className='mainTop1'>
        <Container>
            <Row>
                 <div className='mainTopIntro'>
                    <h1>
          <span className="banner1__wastewater">Innovation Support</span>
          <h1>
          <span className="banner1__treatment">Request &</span>
        </h1>
        </h1>
        <h1>
          <span className="banner1__treatment">Innovation Support</span>
        </h1>
                 </div>
            </Row>
        </Container>  
    </div>

        <div className="mx-5 pt-2 service-container">
          <img src={img4} alt="Build" className="service-image" />
          <div className="service-text pt-5">
            <h3 className='pt-5'>Innovation Support Request</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              suscipit sagittis velit eu porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              suscipit sagittis velit eu porttitor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              suscipit sagittis velit eu porttitor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              suscipit sagittis velit eu porttitor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              suscipit sagittis velit eu porttitor.
            </p>
            <Button className='px-5 mx-3' href='/innovationAll'>Learn More</Button>
          </div>
        </div>

         <div className="mx-5 pt-2 service-container">
          <img src="https://i.ibb.co/7jhRhh5/Boy-Water-innovation-smaller-1024x683.jpg" alt="Build" className="service-image" />
          <div className="service-text pt-5">
            <h3 className='pt-5'>Innovation Support</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              suscipit sagittis velit eu porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              suscipit sagittis velit eu porttitor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              suscipit sagittis velit eu porttitor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              suscipit sagittis velit eu porttitor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              suscipit sagittis velit eu porttitor.
            </p>
            <Button className='px-5 mx-3' href='/innovation'>Learn More</Button>
          </div>
          </div>
        </>
  )
}

export default InnovationMain