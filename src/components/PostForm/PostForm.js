import React, { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";

import { createPost } from "../../store";
import "./PostForm.scss";

const PostForm = ({ labelTitle, labelBody, setActive, title, body }) => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({ title, body });

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

    axios
      .post("https://first-node-js-todos.herokuapp.com/todos/", {
        ...post,
      })
      .then(() => console.log("posted"));
  };

  const onSubmitPostClick = (e) => {
    addNewPost(e);
    setActive(false);
  };

  return (
    <form>
      <div className="form-group post-form">
        <label className="post-form__title" htmlFor="title">
          {labelTitle}
        </label>

        <input
          /*value={post.title}*/
          className="form-control"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          id="title"
          placeholder={labelTitle}
          defaultValue={title}
        />

        <label className="post-form__description" htmlFor="description">
          {labelBody}
        </label>

        <input
          type="text"
          className="form-control"
          id="description"
          placeholder={labelBody}
          /* value={post.body}*/
          defaultValue={body}
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
