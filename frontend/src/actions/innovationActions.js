import axios from "axios";
import {
    INNOVATION_LIST_REQUEST,
    INNOVATION_LIST_SUCCESS,
    INNOVATION_LIST_FAIL,
    INNOVAIONONE_SUCCESS,
    INNOVATION_REQUEST
} from '../constants/innovationConstants'


//all note list
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

//all note list
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

