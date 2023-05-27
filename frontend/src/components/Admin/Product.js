import React, { useState, useEffect, useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import ErrorMessage from "../../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { createProductAction } from "./../../actions/productActions";
import Sidebar from "./Sidebar";

const ProductForm = () => {
  const [productName, setproductName] = useState("");
  const [productDes, setproductDes] = useState("");
  const [productCap, setproductCap] = useState("");
  const [productPrice, setproductPrice] = useState();
  const [productImage, setproductImage] = useState();
  const [picMessage, setPicMessage] = useState(null);

  const dispatch = useDispatch();
  const formRef = useRef();

  const productCreate = useSelector((state) => state.productCreate);
  const { loading, product, error } = productCreate;

  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please Select an Image");
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
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setproductImage(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  //submit form
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductAction(
        productName,
        productDes,
        productCap,
        productPrice,
        productImage
      )
    );

    formRef.current.reset();
    setproductName("");
    setproductDes("");
    setproductCap("");
    setproductPrice("");
    setproductImage("");
    setPicMessage(null);
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
          Add New Product
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
              <Form ref={formRef} onSubmit={submitHandler}>
                <Form.Group controlId="title">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="title"
                    value={productName}
                    placeholder="Enter product name"
                    onChange={(e) => setproductName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="title">
                  <Form.Label>Product Description</Form.Label>
                  <Form.Control
                    type="title"
                    placeholder="Enter product description"
                    value={productDes}
                    onChange={(e) => setproductDes(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="title">
                  <Form.Label>Product Capacity</Form.Label>
                  <Form.Control
                    type="title"
                    placeholder="Enter the product capacity"
                    value={productCap}
                    onChange={(e) => setproductCap(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="title">
                  <Form.Label>Product Price</Form.Label>
                  <Form.Control
                    type="title"
                    placeholder="Enter the product price"
                    value={productPrice}
                    onChange={(e) => setproductPrice(e.target.value)}
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
                    label="Upload product Picture"
                    onChange={(e) => postDetails(e.target.files[0])}
                    custom
                  />
                </Form.Group>

                <Button type="submit" variant="primary" className="my-4">
                  Create Product
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
