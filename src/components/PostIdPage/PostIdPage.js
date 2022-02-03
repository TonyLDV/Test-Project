import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPostById } from "../../store";

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
      <div className="card card-margin ">
        <div className="card-body spb">
          <div className="card-title">
            <div className="post__info">
              <strong>
                {activePost._id}. {activePost.title}
              </strong>
              {activePost.body}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostIdPage;
