import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Dump } from "../Icon";
import { deletePost, getPostById } from "../../store";

import "./Post.scss";

const Post = ({ post, number, type, detailMode = true }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onRemoveClick = () => {
    dispatch(deletePost(post._id, type));
  };

  const onMoreClick = () => {
    navigate(`/posts/${post._id}`);
    dispatch(getPostById(post._id));
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
          {detailMode && (
            <button className="post__button-group__more" onClick={onMoreClick}>
              Подробнее
            </button>
          )}
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
