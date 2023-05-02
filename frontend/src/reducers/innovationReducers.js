
import {
    INNOVATION_LIST_REQUEST,
    INNOVATION_LIST_SUCCESS,
    INNOVATION_LIST_FAIL
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

