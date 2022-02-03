import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Dump } from "../Icon";
import { deletePost, getPostById } from "../../store";

import "./Post.scss";

const Post = ({ post, number, type, postDetail }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onRemoveClick = () => {
    dispatch(deletePost(post.id, type));
  };

  const onMoreClick = () => {
    navigate(`/posts/${post.id}`);
    dispatch(getPostById(post.id));
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

        <div className="post__button-group">
          <button className="post__button-group__more" onClick={onMoreClick}>
            Подробнее
          </button>
          <button
            className="post__button-group__delete"
            onClick={onRemoveClick}
          >
            <Dump />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
