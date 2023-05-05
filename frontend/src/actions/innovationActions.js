import axios from "axios";
import {
    INNOVATION_LIST_REQUEST,
    INNOVATION_LIST_SUCCESS,
    INNOVATION_LIST_FAIL,
    INNOVAIONONE_SUCCESS,
    INNOVATION_REQUEST,
    INNOVATION_CREATE_REQUEST,
    INNOVATION_CREATE_SUCCESS,
    INNOVATION_CREATE_FAIL
} from '../constants/innovationConstants'


//all innovation list
export const listInnoation = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: INNOVATION_LIST_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    const { data } = await axios.get("http://localhost:5000/innovation");

    dispatch({
      type: INNOVATION_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: INNOVATION_LIST_FAIL,
      payload: message,
    });
  }
};

//all innovation one list
export const listInnoationOne = (id,innovationType,innovationTitle, innovationDes, innovationImage,innovationFile) => async (dispatch, getState) => {
   dispatch({
      type:  INNOVATION_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:5000/innovation/${id}`,{
       innovationType,
       innovationTitle,
       innovationDes,
       innovationImage,
       innovationFile 
    }     
    );
    dispatch({
      type:  INNOVAIONONE_SUCCESS,
      payload: data,
    });
};

//create innovation
export const createInnovationAction = ( innovationType,innovationTitle, innovationDes, innovationImage,innovationFile ) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: INNOVATION_CREATE_REQUEST,
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
      `http://localhost:5000/innovation/create`,
      { innovationType,innovationTitle, innovationDes, innovationImage,innovationFile }
    );

    dispatch({
      type: INNOVATION_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: INNOVATION_CREATE_FAIL,
      payload: message,
    });
  }
};

