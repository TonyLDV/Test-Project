import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Post from "../Post";
import { Loader } from "../Loader";
import Pagination from "../Pagination";
import { fetchPosts, getPostById } from "../../store";

import "./FetchedPosts.scss";
import { useNavigate, useParams } from "react-router-dom";

export default () => {
  const dispatch = useDispatch();

  const [postNumb, setPostNumb] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const {
    app: { loading },
    posts: { fetchedPosts: posts, pages },
  } = useSelector((state) => state);

  const onPageChange = (page) => {
    dispatch(fetchPosts(postNumb, page));
    setCurrentPage(page);
  };

  const onAsyncClick = (postId) => {
    dispatch(getPostById(postId));
  };

  if (loading) {
    return <Loader />;
  }

  if (!posts.length) {
    return (
      <div className="fetched-post">
        <input
          className="fetched-post__number"
          type="number"
          placeholder=" Введите количество постов "
          min={0}
          max="5"
          onChange={(event) => setPostNumb(event.target.value)}
        />

        <button
          onClick={() => dispatch(fetchPosts(postNumb, currentPage))}
          className="btn btn-primary"
        >
          Загрузить
        </button>
      </div>
    );
  }

  return (
    <div>
      <div>
        {posts.map((post) => (
          <Post
            post={post}
            key={post.id}
            number={post.id}
            type="async"
            /*postDetail={onAsyncClick}*/
          />
        ))}
      </div>

      <Pagination
        onPageChange={onPageChange}
        currentPage={currentPage}
        maxPage={pages}
      />
    </div>
  );
};
