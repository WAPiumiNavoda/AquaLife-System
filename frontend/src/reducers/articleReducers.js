
import {
    ARTICLE_LIST_REQUEST,
    ARTICLE_LIST_SUCCESS,
    ARTICLE_LIST_FAIL
} from '../constants/articleConstants'



//get innovation
export const articleListReducer = (state = { article: [] }, action) => {
  switch (action.type) {
    case ARTICLE_LIST_REQUEST:
      return { loading: true };
    case ARTICLE_LIST_SUCCESS:
      return { loading: false, article: action.payload };
    case ARTICLE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

