import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  listProductOne,
  updateProductAction,
} from "../../actions/productActions";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const ProductUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const productOne = useSelector((state) => state.productOne);
  const [productName, setProductName] = useState("");
  const [productDes, setProductDes] = useState("");
  const [productCap, setProductCap] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);

  const dispatch = useDispatch();

  const { loading, product, error } = productOne;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/product/${id}`);
        setProductName(data.productName);
        setProductDes(data.productDes);
        setProductCap(data.productCap);
        setProductPrice(data.productPrice);
        setProductImage(data.productImage);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, [id]);

  const handleUpdate = () => {
    dispatch(
      updateProductAction(
        id,
        productName,
        productDes,
        productCap,
        productPrice,
        productImage
      )
    );
    navigate("/allproduct");
  };

  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please select an image");
    }
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "LAYOUTindex");
      data.append("cloud_name", "dknttakfo");
      fetch("https://api.cloudinary.com/v1_1/dknttakfo/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setProductImage(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please select an image");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "#1D267D",
            marginTop: "20px",
            marginRight: "100px",
          }}
        >
          Update Product
        </h1>
        <div
          class="container88"
          style={{
            width: "800px",
            height: "500px",
            marginLeft: "350px",
            marginTop: "40px",
          }}
        >
          <div class="row">
            <div class="col-md-6">
              <Form onSubmit={handleUpdate}>
                <Form.Group controlId="title">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="title"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="title">
                  <Form.Label>Product Description</Form.Label>
                  <Form.Control
                    type="title"
                    value={productDes}
                    onChange={(e) => setProductDes(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="title">
                  <Form.Label>Product Capacity</Form.Label>
                  <Form.Control
                    type="title"
                    value={productCap}
                    onChange={(e) => setProductCap(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="title">
                  <Form.Label>Product Price</Form.Label>
                  <Form.Control
                    type="title"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    required
                  />
                </Form.Group>

                {picMessage && (
                  <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
                )}
                <Form.Group controlId="pic">
                  <Form.Label>Product Images</Form.Label>
                  <Form.Control
                    id="custom-file"
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setUploadedImage(file);
                      postDetails(file);
                    }}
                    custom
                  />
                </Form.Group>

                <Button type="submit" variant="primary" className="my-4">
                  Update
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
