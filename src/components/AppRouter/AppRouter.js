import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "../../views/About";
import PostIdPage from "../PostIdPage";
import NotFound from "../../views/NotFound";
import PostsPage from "../../views/PostsPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route exact path="/posts" element={<PostsPage />} />
      <Route exact path="/posts/:id" element={<PostIdPage />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound to="/" />} />
    </Routes>
  );
};

export default AppRouter;
