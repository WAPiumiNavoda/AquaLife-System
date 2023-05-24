import axios from "axios";
import swal from "sweetalert";
import {
  QUALITY_LIST_REQUEST,
  QUALITY_LIST_SUCCESS,
  QUALITY_LIST_FAIL,
  QUALITYONE_SUCCESS,
  QUALITYONE_REQUEST,
  QUALITY_CREATE_REQUEST,
  QUALITY_CREATE_SUCCESS,
  QUALITY_CREATE_FAIL,
  QUALITYONE_FAILURE,
  QUALITY_DELETE_REQUEST,
  QUALITY_DELETE_SUCCESS,
  QUALITY_DELETE_FAIL,
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
  (id, token, name, email, mobile, district, createdAt) => async (dispatch) => {
    dispatch({
      type: QUALITYONE_REQUEST,
    });

    try {
      const { data } = await axios.get(
        `http://localhost:5000/qualityTest/${id}`,
        {
          params: {
            token,
            name,
            email,
            mobile,
            district,
            createdAt,
          },
        }
      );

      dispatch({
        type: QUALITYONE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: QUALITYONE_FAILURE,
        payload: error.message, // Optionally, you can provide an error message to the reducer
      });
    }
  };

//create quality test
export const createQualityAction =
  (token, name, email, mobile, district, createdAt) =>
  async (dispatch, getState) => {
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
        { token, name, email, mobile, district, createdAt }
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

//delete

export const deleteQuality = (id) => async (dispatch) => {
  try {
    dispatch({ type: QUALITY_DELETE_REQUEST });

    // Make the DELETE request to delete the quality test
    await axios.delete(`http://localhost:5000/qualityTest/${id}`);

    dispatch({ type: QUALITY_DELETE_SUCCESS });
    dispatch(listQuality());
  } catch (error) {
    dispatch({
      type: QUALITY_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
