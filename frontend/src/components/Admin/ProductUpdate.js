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
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h2
        style={{
          textAlign: "center",
          marginTop: "-60px",
          fontFamily: "poppins",
          fontSize: "55px",
        }}
      >
        UPDATE PRODUCT DETAILS
      </h2>
      <Card
        style={{
          borderRadius: 80,
          borderWidth: 7.0,
          marginTop: 50,
          paddingInline: 10,
          background: "rgba(231, 238, 238, 0.8)",
          marginLeft: "22%",
          marginRight: "20%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          minWidth: "120vh",
          width: 800,
          Height: 400,
        }}
      >
        <br />
        <div>
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {loading && <Loading />}
        </div>
        <br />

        <Form onSubmit={handleUpdate}>
          <Form.Group controlId="pic">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="file"
              label="Upload Product Picture"
              onChange={(e) => {
                const file = e.target.files[0];
                setUploadedImage(file);
                postDetails(file);
              }}
              custom
            />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              value={productName}
              placeholder="Enter Product Name"
              onChange={(e) => setProductName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Project Description"
              value={productDes}
              onChange={(e) => setProductDes(e.target.value)}
              style={{ height: 100 }}
            />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Capacity</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Project value"
              value={productCap}
              onChange={(e) => setProductCap(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Project value"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ fontSize: 20, marginTop: 10 }}
          >
            Update
          </Button>
        </Form>

        <br />
      </Card>
      <br />
      <br />
    </>
  );
};

export default ProductUpdate;
