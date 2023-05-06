import axios from "axios";
import {
    INNOVATIONSUPPORT_CREATE_REQUEST,
    INNOVATIONSUPPORT_CREATE_SUCCESS,
    INNOVATIONSUPPORT_CREATE_FAIL,
    INNOVATIONSUPPORT_LIST_REQUEST,
    INNOVATIONSUPPORT_LIST_SUCCESS,
    INNOVATIONSUPPORT_LIST_FAIL
} from '../constants/supportConstants'

//create innovation
export const createSupportInnovationAction = ( suppotorName,suppotorEmail,supportorPhone, price ) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: INNOVATIONSUPPORT_CREATE_REQUEST,
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
      `http://localhost:5000/supportInnovation/create`,
      { suppotorName,suppotorEmail,supportorPhone, price }
    );

    dispatch({
      type: INNOVATIONSUPPORT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: INNOVATIONSUPPORT_CREATE_FAIL,
      payload: message,
    });
  }
};


