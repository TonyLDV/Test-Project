import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPostById } from "../../store";
import Post from "../Post";

const PostIdPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const {
    posts: { activePost },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getPostById(id));
  }, [id, dispatch]);

  return (
    <div className="container">
      <Post post={activePost} number={1} detailMode={false} type="async" />
    </div>
  );
};

export default PostIdPage;
