
import {
    INNOVATION_LIST_REQUEST,
    INNOVATION_LIST_SUCCESS,
    INNOVATION_LIST_FAIL,
    INNOVAIONONE_SUCCESS,
    INNOVATION_CREATE_REQUEST,
    INNOVATION_CREATE_SUCCESS,
    INNOVATION_CREATE_FAIL
} from '../constants/innovationConstants'



//get innovation
export const innovationListReducer = (state = { innovation: [] }, action) => {
  switch (action.type) {
    case INNOVATION_LIST_REQUEST:
      return { loading: true };
    case INNOVATION_LIST_SUCCESS:
      return { loading: false, innovation: action.payload };
    case INNOVATION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

  //get innovation by id
  export const innovationOneReducer = (state = { innovation: [] }, action) => {
  switch (action.type) {
    case INNOVAIONONE_SUCCESS:
      return { loading: true };
    default:
      return state;
  }
}

//create innovations
export const InnovationCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case INNOVATION_CREATE_REQUEST:
      return { loading: true };
    case INNOVATION_CREATE_SUCCESS:
      return { loading: false, success: true };
    case INNOVATION_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};