import {
	PROJECT_LIST_FAIL,
	PROJECT_LIST_REQUEST,
	PROJECT_LIST_SUCCESS,
	PROJECT_CREATE_REQUEST,
    PROJECT_CREATE_SUCCESS,
    PROJECT_CREATE_FAIL,
} from "../constants/projectConstants";
import axios from "axios";
import swal from "sweetalert";

export const listProjects = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: PROJECT_LIST_REQUEST,
		});

		// const {
		// 	user_Login: { userInfo },
		// } = getState();

		// const config = {
		// 	headers: {
		// 		Authorization: `Bearer ${userInfo.token}`,
		// 	},
		// };

		const { data } = await axios.get(`http://localhost:5000/user/admin/getProjects`);
		console.log("Checkeddata",data)

		dispatch({
			type: PROJECT_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		dispatch({
			type: PROJECT_LIST_FAIL,
			payload: message,
		});
	}
};

export const createProjects = ( name,description,price,photo) => async (
	dispatch,
	getState
  ) => {
	try {
	  dispatch({
		type: PROJECT_CREATE_REQUEST,
	  });
  
	//   const {
	//     userLogin: { userInfo },
	//   } = getState();
  
	//   const config = {
	//     headers: {
	//       "Content-Type": "application/json",
	//       Authorization: `Bearer ${userInfo.token}`,
	//     },
	//   };
  
	  const { data } = await axios.post(
		`http://localhost:5000/user/admin/projectCreate`,
		{ name,description,price,photo}
		
	  );
	  console.log("data",data)
	  swal({
        title: "Success !!!",
        text: "Your Project details added successfully.",
        icon: "success",
        timer: 2000,
        button: false,
      });
  
	  dispatch({
		type: PROJECT_CREATE_SUCCESS,
		payload: data,
	  });
	} catch (error) {
	  const message =
		error.response && error.response.data.message
		  ? error.response.data.message
		  : error.message;
	  dispatch({
		type: PROJECT_CREATE_FAIL,
		payload: message,
	  });
	}
  };


