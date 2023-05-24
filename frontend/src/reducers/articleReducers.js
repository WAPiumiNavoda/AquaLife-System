
import {
    ARTICLE_LIST_REQUEST,
    ARTICLE_LIST_SUCCESS,
    ARTICLE_LIST_FAIL,
    ARTICLE_SUCCESS,
    ARTICLE_CREATE_REQUEST,
    ARTICLE_CREATE_SUCCESS,
    ARTICLE_CREATE_FAIL,
    ARTICLE_APPROVE_REQUEST,
    ARTICLE_APPROVE_SUCCESS,
    ARTICLE_APPROVE_FAIL,
    ARTICLE_DENY_REQUEST,
    ARTICLE_DENY_SUCCESS,
    ARTICLE_DENY_FAIL,
    SET_APPROVED_DATA
} from '../constants/articleConstants'



//get article request
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


 //get article request by id
 export const articleOneReducer = (state = { article: [] }, action) => {
  switch (action.type) {
    case ARTICLE_SUCCESS:
      return { loading: true };
    default:
      return state;
  }
};

//create article request
export const articleCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_CREATE_REQUEST:
      return { loading: true };
    case ARTICLE_CREATE_SUCCESS:
      return { loading: false, success: true };
    case ARTICLE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//approve articles request
export const ArticleAcceptReducer = (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_APPROVE_REQUEST:
      return { loading: true };
    case ARTICLE_APPROVE_SUCCESS:
       const updatedData = state.data.map((item) => {
        if (item._id === action.payload) {
          return { ...item, status: action.type === ARTICLE_APPROVE_SUCCESS ? 'approved' : 'denied' };
        }
        return item;
      });
      return { ...state, data: updatedData };
      // return { loading: false, success: true };
    case ARTICLE_APPROVE_FAIL:
      return { loading: false, error: action.payload };
    
    default:
      return state;
  }
};

//deny article request
export const ArticleDenyReducer = (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_DENY_REQUEST:
      return { loading: true };
    case ARTICLE_DENY_SUCCESS:
      return { loading: false, success: true };
    case ARTICLE_DENY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const ArticleApproveListReducer = (state = { data: [] } , action) => { 
   switch (action.type) {
    case SET_APPROVED_DATA:
      return { approvedData: action.payload };
    default:
      return state;
  }
}



