import axios from "axios";
import swal from "sweetalert";
import {
  QUALITY_LIST_REQUEST,
  QUALITY_LIST_SUCCESS,
  QUALITY_LIST_FAIL,
  QUALITYONE_SUCCESS,
  QUALITY_REQUEST,
  QUALITY_CREATE_REQUEST,
  QUALITY_CREATE_SUCCESS,
  QUALITY_CREATE_FAIL,
} from "../constants/qualityTestConstants";

//all quality test list
export const listQuality = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: QUALITY_LIST_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    const { data } = await axios.get("http://localhost:5000/qualityTest");

    dispatch({
      type: QUALITY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: QUALITY_LIST_FAIL,
      payload: message,
    });
  }
};

//all quality test one list
export const listQualityOne =
  (id, token, name, email, mobile, district) => async (dispatch, getState) => {
    dispatch({
      type: QUALITY_REQUEST,
    });

    const { data } = await axios.get(
      `http://localhost:5000/qualityTest/${id}`,
      {
        token,
        name,
        email,
        mobile,
        district,
      }
    );
    dispatch({
      type: QUALITYONE_SUCCESS,
      payload: data,
    });
  };

//create quality test
export const createQualityAction =
  (token, name, email, mobile, district) => async (dispatch, getState) => {
    try {
      dispatch({
        type: QUALITY_CREATE_REQUEST,
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
        `http://localhost:5000/qualityTest/create`,
        { token, name, email, mobile, district }
      );
      swal({
        title: "Success !!!",
        text: "Your quality test details added successfully.",
        icon: "success",
        timer: 2000,
        button: false,
      });

      dispatch({
        type: QUALITY_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: QUALITY_CREATE_FAIL,
        payload: message,
      });
    }
  };
