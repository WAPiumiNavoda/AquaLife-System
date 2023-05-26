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

export const DonateListReducer = (state = { donate: [] }, action) => {
	switch (action.type) {
		case DONATELABOR_LIST_REQUEST:
			return { loading: true };
		case DONATELABOR_LIST_SUCCESS:
			return { loading: false, labor: action.payload };
		case DONATELABOR_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const DonateCreateReducer = (state = {}, action) => {
	switch (action.type) {
	  case DONATELABOR_CREATE_REQUEST:
		return { loading: true };
	  case DONATELABOR_CREATE_SUCCESS:
		return { loading: false, success: true };
	  case DONATELABOR_CREATE_FAIL:
		return { loading: false, error: action.payload };
	  default:
		return state;
	}
}

export const DonateUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case DONATELABOR_UPDATE_REQUEST:
			return { loading: true };
		case DONATELABOR_UPDATE_SUCCESS:
			return { loading: false, success: true };
		case DONATELABOR_UPDATE_FAIL:
			return { loading: false, error: action.payload, success: false };

		default:
			return state;
	}
};

export const DonateDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case DONATELABOR_DELETE_REQUEST:
			return { loading: true };
		case DONATELABOR_DELETE_SUCCESS:
			return { loading: false, success: true };
		case DONATELABOR_DELETE_FAIL:
			return { loading: false, error: action.payload, success: false };

		default:
			return state;
	}
};


