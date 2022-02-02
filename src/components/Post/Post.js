import React from "react";

import { Dump } from "../Icon";
import { deletePost } from "../../store";
import { useDispatch } from "react-redux";

import "./Post.scss";

const Post = ({ post, number, type }) => {
  const dispatch = useDispatch();

  const onRemoveClick = () => {
    dispatch(deletePost(post.id, type));
  };

  return (
    <div className="card card-margin ">
      <div className="card-body spb">
        <div className="card-title">
          <div className="post__info">
            <strong>
              {number}. {post.title}
            </strong>
            {post.body}
          </div>
        </div>

        <div>
          <button className="post__del-btn" onClick={onRemoveClick}>
            <Dump />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
