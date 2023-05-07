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
              Innovation often refers to something new, such as an invention, or
               the practice of developing and introducing new things. In the tech world,
                an innovation is usually a new product, but it can also be a new way of
                 doing something or even a new way of thinking. At the Foundation, and 
                 through our BOLT and Research programs, we are learning that innovation 
                 looks many different ways, and take a number of different forms. 
                 For example, Dr. Chomora Mikeka in Malawi is developing a 
              solution to “green” the way in which garbage is collected in cities.
            </p>
            <Button className='px-5 mx-3' href='/innovationAll'>Learn More</Button>
          </div>
        </div>

         <div className="mx-5 pt-2 service-container">
          <img src="https://i.ibb.co/7jhRhh5/Boy-Water-innovation-smaller-1024x683.jpg" alt="Build" className="service-image" />
          <div className="service-text pt-5">
            <h3 className='pt-5'>Innovation Support</h3>
            <p>
              Mechanical filtration is the process of physically removing sediment,
               dirt, or particles from water using a barrier. It can be anything from 
               a basic mesh to a ceramic filter with a complex pore structure for 
               ultra-fine filtration of pathogenic organisms. Filters are usually given 
               a micron rating, which indicates how effective they
               are in terms of the size of the particles they are capable of removing.
            </p>
            <Button className='px-5 mx-3' href='/innovation'>Learn More</Button>
          </div>
          </div>
        </>
  )
}

export default InnovationMain