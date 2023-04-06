import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	// ADMIN_VIEW_FAIL,
	// ADMIN_VIEW_REQUEST,
	// ADMIN_VIEW_SUCCESS,
	// ADMIN_UPDATE_FAIL,
	// ADMIN_UPDATE_REQUEST,
	// ADMIN_UPDATE_SUCCESS,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return { loading: true };
		case USER_LOGIN_SUCCESS:
			return { loading: false, userInfo: action.payload };
		case USER_LOGIN_FAIL:
			return { loading: false, error: action.payload };
		case USER_LOGOUT:
			return {};

		default:
			return state;
	}
};

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return { loading: true };
		case USER_REGISTER_SUCCESS:
			return { loading: false, userInfo: action.payload };
		case USER_REGISTER_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

// export const adminViewReducer = (state = {}, action) => {
// 	switch (action.type) {
// 		case ADMIN_VIEW_REQUEST:
// 			return { loading: true };
// 		case ADMIN_VIEW_SUCCESS:
// 			return { loading: false, adminInfo: action.payload };
// 		case ADMIN_VIEW_FAIL:
// 			return { loading: false, error: action.payload };
// 		default:
// 			return state;
// 	}
// };

// export const adminUpdateReducer = (state = {}, action) => {
// 	switch (action.type) {
// 		case ADMIN_UPDATE_REQUEST:
// 			return { loading: true };
// 		case ADMIN_UPDATE_SUCCESS:
// 			return { loading: false, adminInfo: action.payload, success: true };
// 		case ADMIN_UPDATE_FAIL:
// 			return { loading: false, error: action.payload, success: false };
// 		default:
// 			return state;
// 	}
// };