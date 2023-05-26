import {
	DONATELABOR_LIST_FAIL,
	DONATELABOR_LIST_REQUEST,
	DONATELABOR_LIST_SUCCESS,
	DONATELABOR_CREATE_REQUEST,
    DONATELABOR_CREATE_SUCCESS,
    DONATELABOR_CREATE_FAIL,
	DONATELABOR_UPDATE_REQUEST ,
	DONATELABOR_UPDATE_SUCCESS,
	DONATELABOR_UPDATE_FAIL,
	DONATELABOR_DELETE_REQUEST,
	DONATELABOR_DELETE_SUCCESS,
	DONATELABOR_DELETE_FAIL

} from "../constants/donateConstants";
import axios from "axios";
import swal from "sweetalert";

export const listDonateLabor = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: DONATELABOR_LIST_REQUEST,
		});

		const { data } = await axios.get(`http://localhost:5000/user/getLabors`);
		console.log("Checked2data",data)

		dispatch({
			type: DONATELABOR_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		dispatch({
			type: DONATELABOR_LIST_FAIL,
			payload: message,
		});
	}
};

export const createLabors = ( name,email,userName,availableDate,country,phone) => async (
	dispatch,
	getState
  ) => {
	try {
	  dispatch({
		type: DONATELABOR_CREATE_REQUEST,
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
		`http://localhost:5000/user/laborCreate`,
		{ name,email,userName,availableDate,country,phone}
		
	  );
	  console.log("data",data)
	  swal({
        title: "Success !!!",
        text: "Your Details added successfully.",
        icon: "success",
        timer: 2000,
        button: false,
      });
  
	  dispatch({
		type:  DONATELABOR_CREATE_SUCCESS,
		payload: data,
	  });
	} catch (error) {
	  const message =
		error.response && error.response.data.message
		  ? error.response.data.message
		  : error.message;
	  dispatch({
		type:  DONATELABOR_CREATE_FAIL,
		payload: message,
	  });
	}
  };

  export const updateLaborAction =(id,updatedLabor) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: DONATELABOR_UPDATE_REQUEST  });

			axios
			.put(`http://localhost:5000/user/getLabor/${id}`, updatedLabor)
			.then((response) => {
			  // Handle successful response
			  console.log(response.data);
			  swal({
				title: "Success !!!",
				text: "Update Successful.",
				icon: "success",
				timer: 2000,
				button: false,
			});
			setTimeout(function () {
				window.location.href = "/laborList";
			}, 2000);

			})
			.catch((error) => {
			  // Handle error
			  console.log(error);
			});
					
		} catch (error) {
			
		}
	};

export const laborDelete = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: DONATELABOR_DELETE_REQUEST,
		});


		const { data } = await axios.delete(`http://localhost:5000/user/getLabor/${id}`);

		dispatch({
			type: DONATELABOR_DELETE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = "Details Delete Failed !!!";
		dispatch({
			type: DONATELABOR_DELETE_FAIL,
			payload: message,
		});
	}
};



