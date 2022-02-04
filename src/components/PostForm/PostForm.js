import axios from "axios";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import "./PostForm.scss";
import { config } from "../../config";
import { createPost, getPostById } from "../../store";

const PostForm = ({
  labelTitle,
  labelBody,
  setActive,
  isEdit = false,
  title = "",
  body = "",
}) => {
  const dispatch = useDispatch();

  const params = useParams();

  const titleInputRef = useRef(null);
  const bodyInputRef = useRef(null);

  const addNewPost = (e) => {
    e.preventDefault();

    const titleValue = titleInputRef.current?.value;

    const bodyValue = bodyInputRef.current?.value;

    if (!titleValue || !bodyValue) {
      return alert(`Поля не могут быть пустыми!`);
    }

    dispatch(createPost({ title: titleValue, body: bodyValue }));

    axios
      .post(`${config.backendApi}todos`, {
        title: titleValue,
        body: bodyValue,
      })
      .then(() => console.log("posted"));

    setActive(false);
  };

  const onUpdatePost = (e) => {
    e.preventDefault();

    const titleValue = titleInputRef.current?.value;

    const bodyValue = bodyInputRef.current?.value;

    if (!bodyValue || !titleValue) {
      return alert(`Поля не могут быть пустыми!`);
    }

    axios
      .put(`${config.backendApi}todos/${params.id}`, {
        title: titleValue,
        body: bodyValue,
      })
      .then(() => dispatch(getPostById(params.id)));

    setActive(false);
  };

  return (
    <form>
      <div className="form-group post-form">
        <label className="post-form__title" htmlFor="title">
          {labelTitle}
        </label>

        <input
          ref={titleInputRef}
          className="form-control"
          type="text"
          id="title"
          placeholder={labelTitle}
          defaultValue={title}
        />

        <label className="post-form__description" htmlFor="description">
          {labelBody}
        </label>

        <input
          ref={bodyInputRef}
          type="text"
          className="form-control"
          id="description"
          placeholder={labelBody}
          defaultValue={body}
        />
      </div>

      <button
        className="btn post-form__btn-create"
        type="submit"
        onClick={isEdit ? onUpdatePost : addNewPost}
      >
        {isEdit ? "Обновить" : "Создать"}
      </button>
    </form>
  );
};

export default PostForm;
