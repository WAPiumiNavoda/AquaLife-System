import {
	PROJECT_LIST_FAIL,
	PROJECT_LIST_REQUEST,
	PROJECT_LIST_SUCCESS,
} from "../constants/projectConstants";

export const ProjectListReducer = (state = { project: [] }, action) => {
	switch (action.type) {
		case PROJECT_LIST_REQUEST:
			return { loading: true };
		case PROJECT_LIST_SUCCESS:
			return { loading: false, project: action.payload };
		case PROJECT_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
