import React, { useState } from "react";

import Modal from "../../components/Modal";
import Posts from "../../components/Posts";
import PostForm from "../../components/PostForm";
import FetchedPosts from "../../components/FetchedPosts";

function PostsPage() {
  const [showCreatePost, setShowCreatePost] = useState(false);

  return (
    <div className="container pt-3">
      <button
        className="btn btn-primary"
        onClick={() => setShowCreatePost(true)}
      >
        Создать пост
      </button>
      <Modal
        active={showCreatePost}
        setActive={setShowCreatePost}
        content={
          <PostForm
            title={"Заголовок поста"}
            body={"Описание поста"}
            setActive={setShowCreatePost}
          />
        }
      />

      <div className="row">
        <div className="col">
          <h2>Синхронные Посты</h2>

          <Posts />
        </div>

        <div className="col">
          <h2>Асинхронные посты</h2>

          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default PostsPage;
