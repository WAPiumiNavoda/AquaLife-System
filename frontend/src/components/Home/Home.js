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
        <h1>WATER,</h1>
        <p>TO EVERY LIVING ORGANISM</p>
      </div>
      <div className="services">
        <div className="title">
          <h2>Our Services</h2>
        </div>
        <div className="service-container">
          <div className="service-text">
            <h3>Wastewater Treatment & Water Quality Monitoring</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              suscipit sagittis velit eu porttitor.
            </p>
          </div>
          <img src={img1} alt="Water" className="service-image" />
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
        <div className="service-container">
          <img src={img4} alt="Build" className="service-image" />
          <div className="service-text">
            <h3>Build your dreams</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              suscipit sagittis velit eu porttitor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
