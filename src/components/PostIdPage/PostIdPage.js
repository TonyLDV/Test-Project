import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPostById } from "../../store";
import Post from "../Post";
import Modal from "../Modal";
import PostForm from "../PostForm";

const PostIdPage = () => {
  const dispatch = useDispatch();
  const [showEditPost, setShowEditPost] = useState(false);

  const { id } = useParams();

  const {
    posts: { activePost },
  } = useSelector((state) => state);

  console.log(activePost.title);

  useEffect(() => {
    dispatch(getPostById(id));
  }, [id, dispatch]);

  return (
    <div className="container">
      <Post
        onEditClick={() => setShowEditPost(true)}
        post={activePost}
        number={1}
        detailMode={false}
        editMode={true}
        type="async"
      />

      <Modal
        active={showEditPost}
        setActive={setShowEditPost}
        content={
          <PostForm
            isEdit={true}
            labelTitle={"Редактировать заголовок поста"}
            labelBody={"Редактировать описание поста"}
            title={activePost.title}
            body={activePost.body}
            setActive={setShowEditPost}
          />
        }
      />
    </div>
  );
};

export default PostIdPage;
