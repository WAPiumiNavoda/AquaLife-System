import React, { useEffect, useState } from "react";
import img1 from "../../Assets/icon-1.png";
import img2 from "../../Assets/icon-2.png";
import img3 from "../../Assets/icon-3.png";
import { useParams } from "react-router-dom";
import axios from "axios";

const OneProduct = ({ match, props }) => {
  const [productName, setProductName] = useState();
  const [productDes, setProductDes] = useState("");
  const [productCap, setProductCap] = useState("");
  const [productPrice, setProductPrice] = useState();
  const [productImage, setProductImage] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`http://localhost:5000/product/${id}`);

      setProductName(data.productName);
      setProductDes(data.productDes);
      setProductCap(data.productCap);
      setProductPrice(data.productPrice);
      setProductImage(data.productImage);
    };
    fetching();
  }, [id]);

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
          Our Company has been the leading supplier of wastewater treatment
          <br /> & water quality monitoring solutions since 1995.
        </p>
      </div>

      <div className="product-details">
        <div className="product-image">
          <img src={productImage} alt="Product" />
          <div className="call-now">
            <h3>
              <i className="fas fa-phone"></i> Call Now
            </h3>
            <p>+94 77 92 84 961</p>
          </div>
        </div>
        <div className="product-info">
          <h2>{productName}</h2>
          <div className="product-attributes">
            <div className="attribute">
              <h4>Price</h4>
              <h5> USD {productPrice}</h5>
            </div>
            <div className="attribute">
              <h4>Capacity</h4>
              <h5>{productCap} L</h5>
            </div>
          </div>
          <h3>About Product</h3>
          <hr className="horizontal-line" />
          <p>{productDes}</p>

          <div className="feature">
            <h3>Product Features</h3>
            <div className="feature-columns">
              <div className="feature-column">
                <img src={img1} alt="Feature 1" />
                <h5>MOISTURE REDUCTION</h5>
                <p>
                  Adulteration moisture reduction technology using a truncated
                  cone (improved dehydration)
                </p>
              </div>
              <div className="feature-column">
                <img src={img2} alt="Feature 2" />
                <h5>SAND FILTRATION</h5>
                <p>Sand filtration using appropriate cyclone</p>
              </div>
              <div className="feature-column">
                <img src={img3} alt="Feature 3" />
                <h5>FINE FILTRATION</h5>
                <p>Fine adulteration filtration using wedge bar drum filter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
