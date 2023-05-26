import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { listProduct, deleteProductAction } from "../../actions/productActions";
import { Link, useNavigate } from "react-router-dom";

const ProductAdmin = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, product, error } = productList;
  const [ProductSearch, setSearch] = useState("");
  const navigate = useNavigate(); // Add this line

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this quality test?")) {
      dispatch(deleteProductAction(id));
    }
  };

  const handleUpdate = (id) => {
    navigate(`/product/${id}`); // Navigate to ProductUpdate page
  };

  return (
    <div className="admin-dashboard">
      <Sidebar />

      <div className="admin-content">
        <div className="admin-header">
          <h1 style={{ marginLeft: "200px" }}>All Product Details</h1>
        </div>

        <input
          type="text"
          placeholder="Search.."
          className="text111"
          name="search2"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          style={{
            backgroundColor: "white",
            border: "1px solid black",
            color: "black",
            width: "400px",
            height: "30px",
            marginLeft: "200px",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        />
        <br />
        <Link to="/product">
          <button
            className="btn btn-primary"
            style={{ marginLeft: "200px", marginTop: "20px" }}
          >
            Add Product
          </button>
        </Link>

        <br />
        <div
          className="admin-content-area"
          style={{ paddingTop: "30px", paddingLeft: "200px" }}
        >
          <div className="content-box" style={{ backgroundColor: "#f5f5f0" }}>
            <h2 className="content-box-title">Product Details</h2>

            <table className="order-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Capacity</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {product &&
                  product
                    .filter((val) => {
                      if (ProductSearch === "") {
                        return val;
                      } else if (
                        val.productName
                          .toLowerCase()
                          .includes(ProductSearch.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((product, index) => (
                      <tr key={product._id}>
                        <td>{product.productName}</td>
                        <td>{product.productDes}</td>
                        <td>{product.productCap}</td>
                        <td>{product.productPrice}</td>
                        <td>
                          <img
                            style={{
                              objectFit: "cover",
                              height: "40px",
                              width: "60px",
                            }}
                            src={product.productImage}
                            alt=""
                          />
                        </td>
                        <td>
                          <div className="user-actions">
                            <button
                              type="button"
                              className="btn btn-outline-primary"
                              onClick={() => handleUpdate(product._id)} // Pass product ID
                            >
                              Update
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                              onClick={() => handleDelete(product._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdmin;
