import axios from "axios";
import swal from "sweetalert";
import {
    ARTICLE_LIST_REQUEST,
    ARTICLE_LIST_SUCCESS,
    ARTICLE_LIST_FAIL,
    ARTICLE_SUCCESS,
    ARTICLE_REQUEST,
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


//all note list
export const listArticle = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ARTICLE_LIST_REQUEST,
    });

    const { data } = await axios.get("http://localhost:5000/article");

    dispatch({
      type: ARTICLE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ARTICLE_LIST_FAIL,
      payload: message,
    });
  }
};



//all article one list
export const listArticleOne = (id, articleType, articleImage, articleTitle, articleContent,  authorName, dateofPublish ) => async (dispatch, getState) => {
  dispatch({
     type:  ARTICLE_REQUEST,
   });

   const { data } = await axios.get(`http://localhost:5000/article/${id}`,{
    articleType, 
    articleImage, 
    articleTitle, 
    articleContent,  
    authorName, 
    dateofPublish
   }     
   );
   dispatch({
     type:  ARTICLE_SUCCESS,
     payload: data,
   });
};

//create article
export const createArticleAction = (articleType, articleImage, articleTitle, articleContent,  authorName, dateofPublish  ) => async (
 dispatch,
 getState
) => {
 try {
   dispatch({
     type: ARTICLE_CREATE_REQUEST,
   });

   
   const { data } = await axios.post(
     `http://localhost:5000/article/create`,

     { articleType, articleImage, articleTitle, articleContent,  authorName, dateofPublish  }

   );
   
    swal({
     title: "Success !!!",
     text: "Article details added successfully.",
     icon: "success",
     timer: 2000,
     button: false
   });
	setTimeout(function () {
				window.location.href = "/articleHome";
			}, 2000);

   dispatch({
     type: ARTICLE_CREATE_SUCCESS,
     payload: data,
   });
 } catch (error) {
   const message =
     error.response && error.response.data.message
       ? error.response.data.message
       : error.message;
   dispatch({
     type: ARTICLE_CREATE_FAIL,
     payload: message,
   });
 }
};


//approve article
export const approveArticleAction = ( id ) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: ARTICLE_APPROVE_REQUEST,
    });


    const { data } = await axios.post(
      `http://localhost:5000/user/article/${id}`,
    );
     swal({
			title: "Success !!!",
			text: "Your article approved.",
			icon: "success",
			timer: 2000,
			button: false,
		});

    dispatch({
      type: ARTICLE_APPROVE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ARTICLE_APPROVE_FAIL,
      payload: message,
    });
  }
};

//article approve action
export const denyArticleAction = ( id ) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: ARTICLE_DENY_REQUEST,
    });

  

    const { data } = await axios.post(
      `http://localhost:5000/user/article/deny/${id}`,
    );
     swal({
			title: "Success !!!",
			text: "Your article request denied.",
			icon: "success",
			timer: 2000,
			button: false,
		});

    dispatch({
      type: ARTICLE_DENY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ARTICLE_DENY_FAIL,
      payload: message,
    });
  }
};


//article deny action
export const setApprovedData = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/data/approved');
    dispatch({ type: SET_APPROVED_DATA, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};
