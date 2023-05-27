import React from 'react'
import img4 from "../../Assets/product.jpg";
import Button from 'react-bootstrap/Button';

const InnovationDes = () => {
  return (
    
<div class="card11 m-5">
    <div className="service-container" style={{paddingLeft:"20px"}}>
          <img src={img4} alt="Build" className="service-image"  />
          <div className="service-text">
             <a href="/innovation" className="tab">
        </a>
            <p className='pt-5' style={{paddingLeft:"50px",paddingRight:"50px",marginTop:'75px'}}>
             Our various strategic partnerships across the globe allow us to bridge the gap to implementations, 
             enabling technology companies to work closely with first adopters, helping to scale effective solutions, faster.

             Our activities are largely funded by public or philanthropic agencies with a goal of stimulating 
            opportunities for industry development and enhanced water sustainability.
            As fresh water becomes increasingly scarce, water resource management and sustainability will be 
            vital to maintaining the quality of life and economic development in communities around the world. 
            Through collaboration, WaterStart drives practical action to address 
            real-world problems using real-world solutions. The result - more, safer, cheaper water.
            </p>
            <Button className="mx-5"href='/innovationAll' variant="dark">
             Learn More
            </Button>
          </div>
        </div>
  
        
</div>
  )
}

export default InnovationDes