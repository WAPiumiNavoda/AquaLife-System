import {
    INNOVATIONSUPPORT_LIST_REQUEST,
    INNOVATIONSUPPORT_LIST_SUCCESS,
    INNOVATIONSUPPORT_LIST_FAIL,
    INNOVAIONONE_SUCCESS,
    INNOVATIONSUPPORT_CREATE_REQUEST,
    INNOVATIONSUPPORT_CREATE_SUCCESS,
    INNOVATIONSUPPORT_CREATE_FAIL
} from '../constants/supportConstants'


//create innovations support
export const InnovationSupportCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case INNOVATIONSUPPORT_CREATE_REQUEST:
      return { loading: true };
    case INNOVATIONSUPPORT_CREATE_SUCCESS:
      return { loading: false, success: true };
    case INNOVATIONSUPPORT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//get all innovation support
export const innovationSupportListReducer = (state = { innovation: [] }, action) => {
  switch (action.type) {
    case INNOVATIONSUPPORT_LIST_REQUEST:
      return { loading: true };
    case INNOVATIONSUPPORT_LIST_SUCCESS:
      return { loading: false, innovation: action.payload };
    case INNOVATIONSUPPORT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};