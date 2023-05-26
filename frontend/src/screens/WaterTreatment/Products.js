import React from "react";
import { Link } from "react-router-dom";
import img5 from "../../Assets/m1.png";
import img6 from "../../Assets/m2.png";
import img7 from "../../Assets/m3.png";
import ProductCard from "./ProductCard";

function Product() {
  return (
    <div>
      <div className="banner1">
        <h1>
          <span className="banner1__wastewater">Wastewater Treatment &</span>
        </h1>
        <h1>
          <span className="banner1__treatment">Water Quality Monitoring</span>
        </h1>
        <p>
          Our Company has been the leading supplier of wastewater treatment{" "}
          <br /> & water quality monitoring solutions since 1995.
        </p>
      </div>

      <div className="description2">
        <h2>Industrial Wastewater Treatment Machines</h2>
        <p>
          Our industrial wastewater treatment machines are designed to remove
          pollutants and impurities from wastewater, making it safe for
          discharge or reuse. With a range of advanced technologies and
          customized solutions, we can meet the unique needs of any industry.
        </p>
      </div>

      <div className="featured-products2">
        <h2>Our Featured Products</h2>
        <ProductCard />
      </div>

      <div className="services2">
        <div className="service2">
          <i className="fas fa-clock"></i>
          <h3>24/7 Service</h3>
          <p>
            Our customer service team is available 24/7 to provide assistance
            and support.
          </p>
        </div>
        <div className="service2">
          <i className="fas fa-check-circle"></i>
          <h3>Guaranteed Satisfaction</h3>
          <p>
            We are committed to ensuring the satisfaction of our customers with
            our products and services.
          </p>
        </div>
        <div className="service2">
          <i className="fas fa-truck"></i>
          <h3>Over 10,000 Machines Sold</h3>
          <p>
            We have a proven track record of delivering quality products and
            have sold over 10,000 machines to satisfied customers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
