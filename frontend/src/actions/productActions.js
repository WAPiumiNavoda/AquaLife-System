import axios from "axios";
import swal from "sweetalert";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCTONE_SUCCESS,
  PRODUCT_REQUEST,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
} from "../constants/productConstants";

//all product list
export const listProduct = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    const { data } = await axios.get("http://localhost:5000/product");

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: message,
    });
  }
};

//all products one list
export const listProductOne =
  (id, productName, productDes, productCap, productPrice, productImage) =>
  async (dispatch, getState) => {
    dispatch({
      type: PRODUCT_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:5000/product/${id}`, {
      productName,
      productDes,
      productCap,
      productPrice,
      productImage,
    });
    dispatch({
      type: PRODUCTONE_SUCCESS,
      payload: data,
    });
  };

//create product
export const createProductAction =
  (productName, productDes, productCap, productPrice, productImage) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REQUEST,
      });

      // const {
      //   userLogin: { userInfo },
      // } = getState();

      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${userInfo.token}`,
      //   },
      // };

      const { data } = await axios.post(
        `http://localhost:5000/product/create`,
        { productName, productDes, productCap, productPrice, productImage }
      );
      swal({
        title: "Success !!!",
        text: "Your product details added successfully.",
        icon: "success",
        timer: 2000,
        button: false,
      });

      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: PRODUCT_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const updateProductAction =
  (id, productName, productDes, productCap, productPrice, productImage) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_UPDATE_REQUEST,
      });

      // const {
      //   userLogin: { userInfo },
      // } = getState();

      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${userInfo.token}`,
      //   },
      // };

      const { data } = await axios.put(`http://localhost:5000/product/${id}`, {
        productName,
        productDes,
        productCap,
        productPrice,
        productImage,
      });

      swal({
        title: "Success !!!",
        text: "Project Update Successful.",
        icon: "success",
        timer: 2000,
        button: false,
      });
      window.location.href = "/allproduct";

      dispatch({
        type: PRODUCT_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: PRODUCT_UPDATE_FAIL,
        payload: message,
      });
    }
  };

export const deleteProductAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    await axios.delete(`http://localhost:5000/product/${id}`);

    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
    });
    dispatch(listProduct());
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: message,
    });
  }
};
