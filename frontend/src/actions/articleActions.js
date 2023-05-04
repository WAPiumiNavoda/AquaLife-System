import axios from "axios";
import {
    ARTICLE_LIST_REQUEST,
    ARTICLE_LIST_SUCCESS,
    ARTICLE_LIST_FAIL
} from '../constants/articleConstants'


//all note list
export const listArticle = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ARTICLE_LIST_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

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

