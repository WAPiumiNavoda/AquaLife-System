import {
	PROJECT_LIST_FAIL,
	PROJECT_LIST_REQUEST,
	PROJECT_LIST_SUCCESS,
	PROJECT_CREATE_REQUEST,
    PROJECT_CREATE_SUCCESS,
    PROJECT_CREATE_FAIL,
	PROJECT_UPDATE_REQUEST ,
	PROJECT_UPDATE_SUCCESS,
	PROJECT_UPDATE_FAIL,
	PROJECT_DELETE_REQUEST,
	PROJECT_DELETE_SUCCESS,
	PROJECT_DELETE_FAIL

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

export const ProjectCreateReducer = (state = {}, action) => {
	switch (action.type) {
	  case PROJECT_CREATE_REQUEST:
		return { loading: true };
	  case PROJECT_CREATE_SUCCESS:
		return { loading: false, success: true };
	  case PROJECT_CREATE_FAIL:
		return { loading: false, error: action.payload };
	  default:
		return state;
	}
}

export const ProjectUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case PROJECT_UPDATE_REQUEST:
			return { loading: true };
		case PROJECT_UPDATE_SUCCESS:
			return { loading: false, success: true };
		case PROJECT_UPDATE_FAIL:
			return { loading: false, error: action.payload, success: false };

		default:
			return state;
	}
};

export const ProjectDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case PROJECT_DELETE_REQUEST:
			return { loading: true };
		case PROJECT_DELETE_SUCCESS:
			return { loading: false, success: true };
		case PROJECT_DELETE_FAIL:
			return { loading: false, error: action.payload, success: false };

		default:
			return state;
	}
};


