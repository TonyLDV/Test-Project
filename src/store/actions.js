import axios from "axios";
import {
  CREATE_POST,
  DELETE_POST,
  FETCH_POSTS,
  GET_POST_COUNT,
  HIDE_LOADER,
  SHOW_LOADER,
} from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function deletePost(id, type = "default") {
  return {
    type: DELETE_POST,
    payload: { id, type },
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function fetchPosts(limit = 10, page = 1) {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );
    dispatch({
      type: GET_POST_COUNT,
      payload: response.headers["x-total-count"],
    });
    dispatch({ type: FETCH_POSTS, payload: response.data });
    dispatch(hideLoader());
  };
}
