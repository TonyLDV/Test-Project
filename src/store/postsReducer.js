import {
  CREATE_POST,
  DELETE_POST,
  FETCH_POSTS,
  GET_POST_PAGES,
  GET_POST_ID,
} from "./types";

const initialState = {
  posts: [
    {
      _id: 0,
      title: "First Post",
      body: "Lorem ipsum dolor sit amet.",
    },
  ],
  fetchedPosts: [],
  activePost: { id: "", title: "", body: "" },
  pages: 0,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: state.posts.concat([action.payload]) };

    case FETCH_POSTS:
      return { ...state, fetchedPosts: action.payload };

    case GET_POST_ID:
      return { ...state, activePost: action.payload };

    case GET_POST_PAGES:
      return { ...state, pages: action.payload };

    case DELETE_POST:
      switch (action.payload.type) {
        case "default":
          const indexPost = state.posts.findIndex(
            (post) => post._id === action.payload.id
          );
          const updatedPosts = [...state.posts];
          updatedPosts.splice(indexPost, 1);
          return { ...state, posts: updatedPosts };
        case "async":
          const indexAsyncPost = state.fetchedPosts.findIndex(
            (post) => post._id === action.payload.id
          );
          const asyncPosts = [...state.fetchedPosts];
          asyncPosts.splice(indexAsyncPost, 1);

          return { ...state, fetchedPosts: asyncPosts };

        default:
          return state;
      }

    default:
      return state;
  }
};
