import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Post from "../Post";
import { Loader } from "../Loader";
import Pagination from "../Pagination";
import { fetchPosts } from "../../store";

import "./FetchedPosts.scss";

export default () => {
  const dispatch = useDispatch();
  const [postNumb, setPostNumb] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const {
    app: { loading },
    posts: { fetchedPosts: posts, count: postsLength },
  } = useSelector((state) => state);

  const onPageChange = (page) => {
    dispatch(fetchPosts(postNumb, page));
    setCurrentPage(page);
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
          <Post post={post} key={post.id} number={post.id} type="async" />
        ))}
      </div>

      <Pagination
        onPageChange={onPageChange}
        currentPage={currentPage}
        maxPage={Math.ceil(postsLength / postNumb)}
      />
    </div>
  );
};
