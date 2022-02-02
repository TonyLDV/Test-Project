import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./views/About";
import Header from "./components/Header";
import PostsPage from "./views/PostsPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PostsPage to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
