import axios from "axios";
import {
  CREATE_POST,
  DELETE_POST,
  FETCH_POSTS,
  GET_POST_PAGES,
  GET_POST_ID,
  HIDE_LOADER,
  SHOW_LOADER,
} from "./types";
import { config } from "../config";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function deletePost(id, type = "default") {
  return async (dispatch) => {
    dispatch(showLoader());

    await axios.delete(`${config.backendApi}todos/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: { id, type },
    });

    dispatch(hideLoader());
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
      `${config.backendApi}todos?limit=${limit}&page=${page}`
    );

    dispatch({
      type: GET_POST_PAGES,
      payload: response.data.total,
    });

    dispatch({ type: FETCH_POSTS, payload: response.data.data });

    dispatch(hideLoader());
  };
}

export function getPostById(postId) {
  return async (dispatch) => {
    const response = await axios.get(`${config.backendApi}todos/${postId}`);
    dispatch({ type: GET_POST_ID, payload: response.data });
  };
}
