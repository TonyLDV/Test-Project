import React from "react";

import Post from "../Post";
import { useSelector } from "react-redux";

import "./Posts.scss";

const Posts = () => {
  const posts = useSelector((state) => state.posts.posts);

  if (!posts.length) {
    return <p className="text-center">На даный момент постов нету. =(</p>;
  }
  return posts.map((posts, index) => (
    <Post key={posts._id} post={posts} number={index + 1} />
  ));
};

export default Posts;
