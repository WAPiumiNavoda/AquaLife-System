import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	// USER_VIEW_FAIL,
	// USER_VIEW_REQUEST,
	// USER_VIEW_SUCCESS,
	// USER_UPDATE_FAIL,
	// USER_UPDATE_REQUEST,
	// USER_UPDATE_SUCCESS,
} from "../constants/userConstants";
import axios from "axios";
import swal from "sweetalert";

export const userLogin = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });

		const config = {
			headers: {
				"Content-type": "application/json",
			},
		};

		const { data } = await axios.post("/user/login", { email, password, isUser: true }, config);

		dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
		swal({
			title: "Success !!!",
			text: "User Log In Successful.",
			icon: "success",
			timer: 2000,
			button: false,
		});
		setTimeout(function () {
			window.location.href = "/admin";
		}, 2000);
		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export function authHeader() {
	let user = JSON.parse(localStorage.getItem("userInfo"));

	if (user && user.token) {
		return { Authorization: `Bearer ${user.token}` };
	} else {
		return {};
	}
}

export const userLogout = () => async (dispatch) => {
	localStorage.removeItem("userInfo");
	dispatch({ type: USER_LOGOUT });
};

export const userRegister = (name, dob, nic, telephone, address, email, password, pic) => async (dispatch) => {
	try {
		dispatch({ type: USER_REGISTER_REQUEST });

		const config = {
			headers: {
				"Content-type": "application/json",
			},
		};

		const { data } = await axios.post(
			`/user/register`,
			{
				name,
				dob,
				nic,
				telephone,
				address,
				email,
				password,
				pic,
			
			},
			config
		);

		dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
		swal({
			title: "Success !!!",
			text: "User Registration Successful.",
			icon: "success",
			timer: 2000,
			button: false,
		});

		setTimeout(function () {
			window.location.href = "/admin";
		}, 2000);
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

// export const adminViewProfile = (admin) => async (dispatch, getState) => {
// 	try {
// 		dispatch({ type: ADMIN_VIEW_REQUEST });

// 		const {
// 			admin_Login: { adminInfo },
// 		} = getState();

// 		const config = {
// 			headers: {
// 				"Content-Type": "application/json",
// 				Authorization: `Bearer ${adminInfo.token}`,
// 			},
// 		};

// 		const { data } = await axios.get("/user/admin/view", admin, config);

// 		dispatch({ type: ADMIN_VIEW_SUCCESS, payload: data });

// 		dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data });

// 		localStorage.setItem("adminInfo", JSON.stringify(data));
// 	} catch (error) {
// 		dispatch({
// 			type: ADMIN_VIEW_FAIL,
// 			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
// 		});
// 	}
// };

// export const adminUpdateProfile = (admin) => async (dispatch, getState) => {
// 	try {
// 		dispatch({ type: ADMIN_UPDATE_REQUEST });

// 		const {
// 			admin_Login: { adminInfo },
// 		} = getState();

// 		const config = {
// 			headers: {
// 				"Content-Type": "application/json",
// 				Authorization: `Bearer ${adminInfo.token}`,
// 			},
// 		};

// 		const { data } = await axios.put("/user/admin/edit", admin, config);

// 		dispatch({ type: ADMIN_UPDATE_SUCCESS, payload: data });
// 		swal({
// 			title: "Success !!!",
// 			text: "Admin Account Update Successful.",
// 			icon: "success",
// 			timer: 2000,
// 			button: false,
// 		});
// 		dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data });
// 		setTimeout(function () {
// 			window.location.href = "/admin-view";
// 		}, 2000);
// 		localStorage.setItem("adminInfo", JSON.stringify(data));
// 	} catch (error) {
// 		dispatch({
// 			type: ADMIN_UPDATE_FAIL,
// 			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
// 		});
// 	}
// };