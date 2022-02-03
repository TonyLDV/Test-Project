import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PostIdPage = () => {
  const params = useParams();

  const {
    posts: { posts: syncPost, activePost },
  } = useSelector((state) => state);

  const postId = syncPost.findIndex(function (value) {
    return value.id === parseInt(params.id);
  });
  console.log(postId);

  return (
    <div className="container">
      <div className="card card-margin ">
        <div className="card-body spb">
          <div className="card-title">
            <div className="post__info">
              <strong>
                {activePost.id}. {activePost.title}
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
