import axios from "axios";
import swal from "sweetalert";
import {
    INNOVATION_LIST_REQUEST,
    INNOVATION_LIST_SUCCESS,
    INNOVATION_LIST_FAIL,
    INNOVAIONONE_SUCCESS,
    INNOVATION_REQUEST,
    INNOVATION_CREATE_REQUEST,
    INNOVATION_CREATE_SUCCESS,
    INNOVATION_CREATE_FAIL,
    INNOVATION_APPROVE_REQUEST,
    INNOVATION_APPROVE_SUCCESS,
    INNOVATION_APPROVE_FAIL,
    INNOVATION_DENY_REQUEST,
    INNOVATION_DENY_SUCCESS,
    INNOVATION_DENY_FAIL,
    SET_APPROVED_DATA,
    INNOVATION_DELETE_FAIL,
    INNOVATION_DELETE_SUCCESS,
    INNOVATION_DELETE_REQUEST,
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

    const { data } = await axios.get("http://localhost:5000/user/innovation");

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

    const { data } = await axios.get(`http://localhost:5000/user/innovation/${id}`,{
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
      `http://localhost:5000/user/innovation/create`,
      { innovationType,innovationTitle, innovationDes, innovationImage,innovationFile }
    );
     swal({
			title: "Success !!!",
			text: "Your innovation details added successfully.",
			icon: "success",
			timer: 2000,
			button: false,
		});

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


//approve innovation
export const approveInnovationAction = ( id ) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: INNOVATION_APPROVE_REQUEST,
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
      `http://localhost:5000/user/innovation/${id}`,
    );
     swal({
			title: "Success !!!",
			text: "Your innovation approved.",
			icon: "success",
			timer: 2000,
			button: false,
		});

    dispatch({
      type: INNOVATION_APPROVE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: INNOVATION_APPROVE_FAIL,
      payload: message,
    });
  }
};



//innovation approve action
export const denyInnovationAction = ( id ) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: INNOVATION_DENY_REQUEST,
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
      `http://localhost:5000/user/innovation/deny/${id}`,
    );
     swal({
			title: "Success !!!",
			text: "Your innovation denied.",
			icon: "success",
			timer: 2000,
			button: false,
		});

    dispatch({
      type: INNOVATION_DENY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: INNOVATION_DENY_FAIL,
      payload: message,
    });
  }
};


//innovation deny action
export const setApprovedData = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/data/approved');
    dispatch({ type: SET_APPROVED_DATA, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};


//delete note action
export const deleteInnoAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type:  INNOVATION_DELETE_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    const { data } = await axios.delete(`http://localhost:5000/user/innovation/delete/${id}`);

    dispatch({
      type:  INNOVATION_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type:  INNOVATION_DELETE_FAIL,
      payload: message,
    });
  }
};