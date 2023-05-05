import {
	PROJECT_LIST_FAIL,
	PROJECT_LIST_REQUEST,
	PROJECT_LIST_SUCCESS,
} from "../constants/projectConstants";
import axios from "axios";
import swal from "sweetalert";

export const listProjects = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: PROJECT_LIST_REQUEST,
		});

		const {
			user_Login: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`user/getProject/${userInfo._id}`, config);

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

