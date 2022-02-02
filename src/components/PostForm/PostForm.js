import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { createPost } from "../../store";

import "./PostForm.scss";

const PostForm = ({ title, body, setActive }) => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    if (!post.title.length || !post.body.length) {
      return alert(`Поля не могут быть пустыми!`);
    }
    const newPost = {
      ...post,
      id: Date.now(),
    };
    dispatch(createPost(newPost));
    setPost({ title: "", body: "" });
  };

  const onSubmitPostClick = (e) => {
    addNewPost(e);
    setActive(false);
  };

  return (
    <form>
      <div className="form-group post-form">
        <label className="post-form__title" htmlFor="title">
          {title}
        </label>

        <input
          value={post.title}
          className="form-control"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          id="title"
          placeholder="Название поста"
        />

        <label className="post-form__description" htmlFor="description">
          {body}
        </label>

        <input
          type="text"
          className="form-control"
          id="description"
          placeholder={body}
          value={post.body}
          onChange={(event) => setPost({ ...post, body: event.target.value })}
        />
      </div>

      <button
        className="btn post-form__btn-create"
        type="submit"
        onClick={onSubmitPostClick}
      >
        Создать
      </button>
    </form>
  );
};

export default PostForm;
