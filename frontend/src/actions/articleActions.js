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
    ARTICLE_CREATE_FAIL
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
export const listArticleOne = (id,category,title, content, name) => async (dispatch, getState) => {
  dispatch({
     type:  ARTICLE_REQUEST,
   });

   const { data } = await axios.get(`http://localhost:5000/article/${id}`,{
      category,
      title, 
      content, 
      name
   }     
   );
   dispatch({
     type:  ARTICLE_SUCCESS,
     payload: data,
   });
};

//create article
export const createArticleAction = ( category,title, content, name ) => async (
 dispatch,
 getState
) => {
 try {
   dispatch({
     type: ARTICLE_CREATE_REQUEST,
   });

   
   const { data } = await axios.post(
     `http://localhost:5000/article/create`,
     { category,title, content, name }
   );
    swal({
     title: "Success !!!",
     text: "Article details added successfully.",
     icon: "success",
     timer: 2000,
     button: false,
   });

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


