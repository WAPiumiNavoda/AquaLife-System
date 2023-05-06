import React from "react";
import "./Home.css";
import img1 from "../../Assets/wastewater.jpg";
import img2 from "../../Assets/donate.jpg";
import img3 from "../../Assets/blog.jpg";
import img4 from "../../Assets/product.jpg";

function Home() {
  return (
    <div>
      <div className="banner">
        <h1 style={{fontSize:"90px" }}>WATER,</h1>
        <p style={{fontSize:"50px" }}>TO EVERY LIVING ORGANISM</p>
      </div>
      <div className="services">
        <div className="title">
          <h2>Our Services</h2>
        </div>
        <div className="service-container">
          <div className="service-text">
            <h3 className="pt-5">Wastewater Treatment & Water Quality Monitoring</h3>
            <p className="px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              suscipit sagittis velit eu porttitor.
            </p>
          </div>
          <img src={img1} alt="Water" className="service-image"  />
        </div>
        <div className="service-container">
          <img src={img2} alt="Donate" className="service-image" />
          <div className="service-text">
          <a href="/user-projectView" className="tab">
           <h3> Donate Now </h3>
        </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              suscipit sagittis velit eu porttitor.
            </p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-text">
            <h3>Education and Knwoladge</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              suscipit sagittis velit eu porttitor.
            </p>
          </div>
          <img src={img3} alt="Education" className="service-image" />
        </div>
        <div className="service-container" style={{paddingLeft:"20px"}}>
          <img src={img4} alt="Build" className="service-image"  />
          <div className="service-text">
             <a href="/innovation" className="tab">
           <h3> Build your dreams</h3>
        </a>
            <p style={{paddingLeft:"50px",paddingRight:"50px"}}>
             Our various strategic partnerships across the globe allow us to bridge the gap to implementations, 
             enabling technology companies to work closely with first adopters, helping to scale effective solutions, faster.

             Our activities are largely funded by public or philanthropic agencies with a goal of stimulating 
            opportunities for industry development and enhanced water sustainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
