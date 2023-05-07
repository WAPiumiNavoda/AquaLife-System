import {
  QUALITY_LIST_REQUEST,
  QUALITY_LIST_SUCCESS,
  QUALITY_LIST_FAIL,
  QUALITYONE_SUCCESS,
  QUALITY_CREATE_REQUEST,
  QUALITY_CREATE_SUCCESS,
  QUALITY_CREATE_FAIL,
} from "../constants/qualityTestConstants";

//get quality test
export const qualityListReducer = (state = { quality: [] }, action) => {
  switch (action.type) {
    case QUALITY_LIST_REQUEST:
      return { loading: true };
    case QUALITY_LIST_SUCCESS:
      return { loading: false, quality: action.payload };
    case QUALITY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//get quality test by id
export const qualityOneReducer = (state = { quality: [] }, action) => {
  switch (action.type) {
    case QUALITYONE_SUCCESS:
      return { loading: true };
    default:
      return state;
  }
};

//create quality tests
export const QualityCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case QUALITY_CREATE_REQUEST:
      return { loading: true };
    case QUALITY_CREATE_SUCCESS:
      return { loading: false, success: true };
    case QUALITY_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
