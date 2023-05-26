import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { listProduct } from "./../../actions/productActions";

const ProductCard = ({ history, search, props }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, product, error } = productList;
  const navigate = useNavigate();
  const user_Login = useSelector((state) => state.user_Login);
  const { userInfo } = user_Login;

  // const [productName, setProductName] = useState();
  // const [productDes, setProductDes] = useState("");
  // const [productCap, setProductCap] = useState("");
  // const [productPrice, setProductPrice] = useState();
  // const [productImage, setProductImage] = useState();

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  return (
    <div className="card2-row">
      {product?.reverse().map((product, index) => (
        <div className="card2" key={index}>
          <img src={product.productImage} alt="machine" />
          <div className="card2-content">
            <h3>{product.productName}</h3>
            <Link to={`/oneProduct/${product._id}`}>See More</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
